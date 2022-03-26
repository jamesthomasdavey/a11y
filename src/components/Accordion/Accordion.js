import React from "react";

import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = ({ darkModeEnabled, hasLoaded }) => {
  const thingsICanDo = [
    {
      heading: "Testing",
      paragraph:
        "Using automated and manual accessibility testing tools to audit your website, I can estimate overall risk, identify what is and isn't accessible, tie all issues to relevant WCAG success criteria, and most importantly, provide instructions on fixing those issues.",
    },
    {
      heading: "Design Reviews",
      paragraph:
        "Accessible development starts with accessible design. I can analyze wireframes and tell you the problem areas, such as insufficient contrast, spacing, color dependencies, and layout issues that may affect users with disabilities.",
    },
    // {
    //   heading: "Planning",
    //   paragraph:
    //     "An accessible component library is paramount for a consistent user experience. Even a perfectly semantic page structure can quickly be nullified if users cannot understand or operate the components within it. By focusing on accessible building blocks of all sizes, I can help you build a seamless experience for all users.",
    // },
    // {
    //   heading: "Planning",
    //   paragraph:
    //     "Accessibility tends to show up late; the topic is often ignored during tech education and is often an afterthought in web and app projects. Implementing accessibility can therefore appear to be a daunting task, but my hope is to ease this process as much as possible and eventually rethink how we approach design and development by including accessibility in the earliest possible stages.",
    // },
    {
      heading: "Handoff",
      paragraph:
        "Even the most accessible designs can be a wasted effort if developers aren't aware of factors such as focus order, reading order, proper semantic containers and controls, and various attributes that help assistive technology users. I can mark up your designs with comments conveying exactly that, removing any guesswork.",
    },
    {
      heading: "Development",
      paragraph:
        "A robust component library is essential for any modern web application and is far-reaching in maintaining accessibility. Using ReactJS, I develop reusable components to uphold and enhance the accessibility of their designs.",
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
