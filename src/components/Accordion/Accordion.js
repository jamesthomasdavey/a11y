import React from "react";

import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = ({ darkModeEnabled, hasLoaded }) => {
  const thingsICanDo = [
    {
      heading: "Testing",
      paragraph:
        "Using automated and manual testing tools to audit your website, I can estimate overall risk, identify what is and isn't accessible, tie all issues to relevant WCAG success criteria, and most importantly, provide instructions on fixing those issues.",
    },
    {
      heading: "Design Reviews",
      paragraph:
        "Get ahead by pushing accessibility to the left. I can analyze wireframes and tell you the problem areas, such as insufficient contrast, spacing, color dependencies, and potential layout issues from the perspective of users with disabilities.",
    },
    // {
    //   heading: "Planning",
    //   paragraph:
    //     "An accessible component library is paramount for a consistent user experience. Even a perfectly semantic page structure can quickly be nullified if users cannot understand or operate the components within it. By focusing on accessible building blocks of all sizes, I can help you build a seamless experience for all users.",
    // },
    {
      heading: "Planning",
      paragraph:
        "Accessibility tends to show up late; the topic is often ignored during tech education and is often an afterthought in web and app projects. Implementing accessibility can therefore appear to be a daunting task, but my hope is to ease this process as much as possible and eventually rethink how we approach design and development by including accessibility in the earliest possible stages.",
    },
    {
      heading: "Handoff Annotations",
      paragraph:
        "When handing designs off to a development team, it's best not to make them guess which semantics and attributes they need for properly exposing information for assistive technology users. I can add comments to your wireframes conveying exactly that, removing any guesswork.",
    },
    {
      heading: "Guidance",
      paragraph:
        "Maybe you've attempted accessibility before but you need some clarification on your learnings, maybe you've had an  audit conducted but have difficulty understanding the results, or maybe you're new to the topic and don't know where to begin. Any step towards accessibility is a positive one, and I want to help make it count.",
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
            hasLoaded={hasLoaded}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
