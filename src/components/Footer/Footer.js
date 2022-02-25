import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FocusRing } from "@react-aria/focus";

import classes from "./Footer.module.css";

const Footer = ({ darkModeEnabled }) => {
  return (
    <footer
      className={[
        classes.wrapper,
        darkModeEnabled ? classes.darkMode : "",
      ].join(" ")}
    >
      <div className={classes.wrapperInner}>
        <h2
          className={[
            classes.header,
            darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
        >
          Curious about the font?
        </h2>
        <p>
          It's called{" "}
          <FocusRing focusRingClass="focus-ring">
            <a
              href="https://fonts.google.com/specimen/Atkinson+Hyperlegible"
              target="_blank"
              rel="noreferrer"
            >
              Atkinson Hyperlegible{" "}
              <BiLinkExternal
                aria-label="Opens in new tab"
                role="img"
                focusable="false"
              />
            </a>
          </FocusRing>
          . It was carefully designed by a team of very smart people to improve
          readability by focusing on letterform distinction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
