import React from "react";
import useCollapse from "react-collapsed";
import { FiChevronDown } from "react-icons/fi";
import { FocusRing } from "@react-aria/focus";

import classes from "./AccordionItem.module.css";

const AccordionItem = ({
  index,
  darkModeEnabled,
  heading,
  paragraph,
  hasLoaded,
}) => {
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
        <FocusRing focusRingClass="focus-ring">
          <button
            className={[
              classes.button,
              darkModeEnabled ? classes.darkMode : classes[`color${index}`],
              isExpanded ? classes.expanded : "",
              hasLoaded ? classes.loaded : "",
            ].join(" ")}
            aria-controls={heading.split(" ").join("-").toLowerCase + "-panel"}
            {...getToggleProps()}
          >
            <div className={classes.buttonInner}>
              <span className={classes.buttonHeading}>{heading}</span>
              <FiChevronDown
                className={[
                  classes.chevron,
                  isExpanded ? classes.down : "",
                ].join(" ")}
                aria-hidden="true"
                focusable="false"
                preserveAspectRatio="none"
              />
            </div>
          </button>
        </FocusRing>
      </h3>
      <div
        aria-labelledby={
          heading.toLowerCase().split(" ").join("-") + "-heading"
        }
        role="region"
        {...getCollapseProps()}
      >
        <p
          className={[
            classes.paragraph,
            darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
        >
          {paragraph}
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;
