import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

import classes from "./DarkModeSwitch.module.css";

const DarkModeSwitch = ({ on, toggle }) => {
  return (
    <button
      className={[classes.wrapper, on ? classes.dark : classes.light].join(" ")}
      onClick={toggle}
      role="switch"
      aria-checked={on ? "true" : "false"}
      aria-label="Dark mode"
    >
      <span
        aria-hidden="true"
        className={[classes.circle, on ? classes.right : classes.left].join(
          " "
        )}
      ></span>
      <BsFillMoonStarsFill
        className={classes.moon}
        aria-hidden="true"
        focusable="false"
      />
      <BsSunFill className={classes.sun} aria-hidden="true" focusable="false" />
    </button>
  );
};

export default DarkModeSwitch;
