import React from "react";
import useCollapse from "react-collapsed";
import { FiChevronDown } from "react-icons/fi";

import classes from "./AccordionItem.module.css";

const AccordionItem = ({ index, darkModeEnabled, heading, paragraph }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <li
      className={[
        classes.wrapper,
        isExpanded && !darkModeEnabled ? classes[`color${index}`] : "",
        isExpanded && darkModeEnabled ? classes.expanded : "",
      ].join(" ")}
    >
      <h3
        className={classes.heading}
        id={heading.toLowerCase().split(" ").join("-") + "-heading"}
      >
        <button
          className={[
            classes.button,
            darkModeEnabled ? classes.darkMode : classes[`color${index}`],
            isExpanded ? classes.expanded : "",
          ].join(" ")}
          aria-controls={heading.split(" ").join("-").toLowerCase + "-panel"}
          {...getToggleProps()}
        >
          {heading}
          <FiChevronDown
            className={[classes.chevron, isExpanded ? classes.down : ""].join(
              " "
            )}
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </h3>
      <div
        aria-labelledby={
          heading.toLowerCase().split(" ").join("-") + "-heading"
        }
        role="region"
        {...getCollapseProps()}
      >
        <p className={classes.paragraph}>{paragraph}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
