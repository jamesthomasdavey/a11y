import React, { useState, useEffect } from "react";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";

import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import Heading from "./components/Heading/Heading";
import Accordion from "./components/Accordion/Accordion";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";

const App = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (
      localStorage.darkModeEnabled === "true" ||
      localStorage.darkModeEnabled === "false"
    ) {
      setDarkModeEnabled(
        localStorage.darkModeEnabled === "true" ? true : false
      );
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("nerds");
      setDarkModeEnabled(true);
    }
  }, []);

  useEffect(() => {
    darkModeEnabled
      ? document.querySelector("body").classList.add("darkMode")
      : document.querySelector("body").classList.remove("darkMode");
  });

  return (
    <React.Fragment>
      <DarkModeSwitch
        on={darkModeEnabled}
        toggle={() => {
          localStorage.setItem("darkModeEnabled", !darkModeEnabled);
          setDarkModeEnabled(!darkModeEnabled);
        }}
      />
      <main className={classes.main}>
        <Heading darkModeEnabled={darkModeEnabled} />
        <p className={classes.paragraph}>
          I am a <strong>Web Developer</strong> and{" "}
          <strong>Web Accessibility Specialist</strong> based in Seattle, doing
          my part to build an inclusive web.
        </p>
        <p className={classes.paragraph}>
          Currently working full-time as an{" "}
          <strong>Accessibility Engineer</strong> for restaurants’ ordering
          platforms, I have previously contributed to hundreds of websites and
          apps in other spaces such as healthcare, entertainment, retail, and
          software. For more about my skills and qualifications,{" "}
          <a
            href="https://jamesthomasdavey.com/resume"
            target="_blank"
            rel="noreferrer"
          >
            check out my resume{" "}
            <BiLinkExternal
              aria-label="Opens in new tab"
              role="img"
              focusable="false"
            />
          </a>
          .
        </p>
        <section>
          <h2
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            I do web accessibility.
          </h2>
          <p className={classes.paragraph}>
            I love the challenge of deconstructing unfamiliar or complex
            interfaces into simplified operable parts, finding ways to linearize
            two-dimentional layouts, and allowing assistive technology to read
            and operate everything. Few things satisfy me more than using a
            keyboard to navigate a robustly-built website with the screen reader
            on.
          </p>
          <p className={classes.paragraph}>
            Accessibility tends to show up late; whether in peoples' engineering
            careers because the topic was either ignored or only briefly
            mentioned in school or bootcamps, or in projects because users with
            disabilities were not considered in the design and development
            stages. Accessibility can therefore appear to be a daunting task,
            but my hope is too ease this process as much as possible and involve
            accessibility in the earliest stages. It's never too late to start
            accessibility, but it's never too early either.
          </p>
        </section>
        <section>
          <h2
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            Things I can do.
          </h2>
          <Accordion darkModeEnabled={darkModeEnabled} />
        </section>
        <section>
          <h2
            id="say-hello-heading"
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            <span
              className={[
                classes.emoji,
                darkModeEnabled ? classes.darkMode : "",
              ].join(" ")}
              aria-hidden="true"
            >
              👋
            </span>{" "}
            Say hello!
          </h2>
          <p className={classes.paragraph}>
            Email me at{" "}
            <a href="mailto:james.davey@fastmail.com">
              james.davey@fastmail.com{" "}
              <BiMailSend
                aria-label="Composes a new email"
                role="img"
                focusable="false"
              />
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/jamesthomasdavey/"
              target="_blank"
              rel="noreferrer"
            >
              visit my LinkedIn{" "}
              <BiLinkExternal
                aria-label="Opens in new tab"
                role="img"
                focusable="false"
              />
            </a>
            , or send a message using the form below:
          </p>
          <ContactForm darkModeEnabled={darkModeEnabled} />
        </section>
      </main>
      <Footer darkModeEnabled={darkModeEnabled} />
    </React.Fragment>
  );
};

export default App;
