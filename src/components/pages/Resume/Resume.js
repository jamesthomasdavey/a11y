import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FocusRing } from "@react-aria/focus";

import classes from "./Resume.module.css";

import downloadicon from "./img/downloadicon.svg";
import resumePdf from "./pdf/James Thomas Davey - Resume.pdf";

import resumeData from "./resumeData";

const ResumePrint = () => {
  document.title = "James Davey | Resume";
  document
    .querySelector("html")
    .setAttribute("style", "background-color: #8fd2af;");
  document
    .querySelector("body")
    .setAttribute("style", "background-color: transparent");
  return (
    <div className={classes.wrapper}>
      <main className={classes.wrapper__inner}>
        <h1 className={classes.nameHeading}>{resumeData.name}</h1>
        <div className={classes.downloadLinkWrapper}>
          <FocusRing focusRingClass={classes.resumeOutline}>
            <a
              className={classes.downloadLink}
              href={resumePdf}
              download="James Thomas Davey - Resume"
            >
              <img alt="Download Resume" src={downloadicon} />
            </a>
          </FocusRing>
        </div>
        <section>
          {/* <h2 className={classes.titleHeading}>{resumeData.jobTitle}</h2> */}
          <ul className={classes.subtitleList}>
            <li>{resumeData.location}</li>
            <li>
              <FocusRing focusRingClass={classes.resumeOutline}>
                <a href={`mailto:${resumeData.email}`}>
                  {resumeData.email}{" "}
                  <BiMailSend
                    aria-label="Composes a new email"
                    role="img"
                    focusable="false"
                  />
                </a>
              </FocusRing>
            </li>
            <li>{resumeData.phoneNumber}</li>
          </ul>
          <p className={classes.summary}>{resumeData.summary}</p>
        </section>
        <section aria-labelledby="work-experience-heading">
          <h2 id="work-experience-heading" className={classes.subHeading}>
            Work Experience
          </h2>
          {resumeData.workExperiences.map((workExperience) => {
            return (
              <section>
                <h3 className={classes.dateRoleWrapper}>
                  <div className={classes.dateHeading}>
                    {workExperience.dates}
                  </div>
                  <div className={classes.roleHeading}>
                    {workExperience.company}, {workExperience.title}
                  </div>
                </h3>
                <div className={classes.expContent}>
                  {workExperience.summary && <p>{workExperience.summary}</p>}
                  <ul>
                    {workExperience.responsibilities.map((responsibility) => {
                      return <li>{responsibility}</li>;
                    })}
                  </ul>
                </div>
              </section>
            );
          })}
        </section>
        <section
          aria-labelledby="education-heading"
          className={classes.educationSection}
        >
          <h2
            id="education-heading"
            className={[classes.subHeading, classes.educationHeading].join(" ")}
          >
            Education
          </h2>
          <section>
            <h3
              className={[classes.roleHeading, classes.schoolHeading].join(" ")}
            >
              {resumeData.education.school}
            </h3>
            <div className={classes.educationContent}>
              <p>
                <span>{resumeData.education.degree}</span>
              </p>
            </div>
          </section>
        </section>
        <section aria-labelledby="technical-skills-heading">
          <h2 id="technical-skills-heading" className={classes.subHeading}>
            Technical Skills
          </h2>
          <ul className={classes.skillsList}>
            {resumeData.technicalSkills.map((technicalSkill) => {
              return <li>{technicalSkill}</li>;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ResumePrint;
