import React from "react";

import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = ({ darkModeEnabled }) => {
  const thingsICanDo = [
    {
      heading: "Testing",
      paragraph:
        "Using automated and manual testing tools to audit your website, I can estimate overall risk, identify what is and isn't accessible, tie any issues to WCAG success criteria, and most importantly, provide instructions on fixing those issues.",
    },
    {
      heading: "Design Reviews",
      paragraph:
        "Get ahead by pushing accessibility to the left. I can analyze wireframes and tell you the problem areas, such as insufficient contrast, spacing, color dependencies, and potential usability issues from the perspective of a users with disabilities.",
    },
    {
      heading: "Handoff Annotations",
      paragraph:
        "Handing designs to a development team? It's best not to make them guess the elements and attributes they should use to ensure that they're exposing the right information for assistive technology users. I can add comments to your wireframes conveying exactly that, removing any guesswork.",
    },
    {
      heading: "Guidance",
      paragraph:
        "Maybe you've attempted accessibility before but you need some clarification on your learnings, maybe you've had an accessibility audit done but have difficulty understanding the results, or maybe you're new to accessibility and don't know where to begin.",
    },
  ];

  return (
    <ul>
      {thingsICanDo.map((thing, i) => {
        return (
          <AccordionItem
            darkModeEnabled={darkModeEnabled}
            heading={thing.heading}
            paragraph={thing.paragraph}
            key={i}
            index={i}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
