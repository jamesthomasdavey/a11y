import React from "react";

import classes from "./Heading.module.css";

const Heading = ({ darkModeEnabled }) => {
  return (
    <h1
      className={[
        classes.wrapper,
        darkModeEnabled ? classes.darkMode : "",
      ].join(" ")}
    >
      Hi, I'm James.
    </h1>
  );
};

export default Heading;
