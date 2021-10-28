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
      <span aria-hidden="true" className={classes.moon}>
        <BsFillMoonStarsFill aria-hidden="true" focusable="false" />
      </span>
      <span aria-hidden="true" className={classes.sun}>
        <BsSunFill aria-hidden="true" focusable="false" />
      </span>
    </button>
  );
};

export default DarkModeSwitch;
