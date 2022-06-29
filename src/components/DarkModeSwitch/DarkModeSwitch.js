import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FocusRing } from "@react-aria/focus";

import classes from "./DarkModeSwitch.module.css";

const DarkModeSwitch = ({ on, toggle, hasLoaded }) => {
  return (
    <header>
      <FocusRing focusRingClass="focus-ring">
        <button
          className={[
            classes.wrapper,
            on ? classes.dark : classes.light,
            hasLoaded ? classes.loaded : "",
          ].join(" ")}
          onClick={toggle}
          role="switch"
          aria-checked={on ? "true" : "false"}
          aria-label="Use dark mode"
        >
          <span
            aria-hidden="true"
            className={[
              classes.circle,
              on ? classes.right : classes.left,
              hasLoaded ? classes.loaded : "",
            ].join(" ")}
          ></span>
          <div className={classes.moonWrapper}>
            <BsFillMoonStarsFill
              className={classes.moon}
              aria-hidden="true"
              focusable="false"
            />
          </div>
          <div className={classes.sunWrapper}>
            <BsSunFill
              className={classes.sun}
              aria-hidden="true"
              focusable="false"
            />
          </div>
        </button>
      </FocusRing>
    </header>
  );
};

export default DarkModeSwitch;
