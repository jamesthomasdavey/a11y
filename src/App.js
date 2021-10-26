import React, { useState } from "react";

import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <React.Fragment>
      <DarkModeSwitch on={darkMode} toggle={() => setDarkMode(!darkMode)} />
      <main>
        <h1>Hi, I'm James.</h1>
        <p>
          I mostly work on ordering platforms for restaurants, but I do other
          things too. As an Accessibility Engineer, I love the challenge of
          deconstructing unfamiliar or complex interfaces into simplified
          operable parts. Few things satisfy me more than using a keyboard to
          navigate a newly-remediated site with the screen reader on.
        </p>
        <section>
          <h2>I do web accessibility.</h2>
          <p>
            If accessibility starts at design, then accessible developing should
            be as simple as using code to uphold the affordances and content
            from the design. If accessibility doesn't start at design, it will
            take some more work, but you still have options.
          </p>
          <p>
            Whatever it is, I'll walk you through it. I've stared at enough
            wireframes and tested enough interfaces to intuitively know what
            semantic information is necessary and what keystrokes would be the
            most predictable. Show me an inaccessible product, and I'll show you
            a variety of approaches ranging from most convenient to most robust.
          </p>
        </section>
        <section>
          <h2>How I can help.</h2>
          <ul>
            <li>
              <h3>Testing</h3>
              <p>
                Already have a site that's up and running? I can audit that for
                you. Using both automated and manual testing tools, I'll
                estimate your overall risk, I'll tell you what is and isn't
                accessible (tied to specific WCAG criteria), and most
                importantly, I'll instruct you on fixing any issues.
              </p>
            </li>
            <li>
              <h3>Design Reviews</h3>
              <p>
                Get ahead by pushing accessibility to the left. I can analyze
                your wireframes and tell you the problem areas, such as
                insufficient contrast, spacing, color dependencies, and
                potential usability issues from the perspective of a users with
                disabilities.
              </p>
            </li>
            <li>
              <h3>Annotations</h3>
              <p>
                Handing designs to a development team? It's best not to make
                them guess the elements and attributes they should use to ensure
                that they're exposing the right information for assistive
                technology users. I can add comments to your wireframes
                conveying exactly that, removing any guesswork.
              </p>
            </li>
            <li>
              <h3>Guidance</h3>
              <p>
                Maybe you've attempted accessibility before and you need some
                clarification on your learnings, or maybe you're new to
                accessibility and have no idea where to begin. I can tell you
                about WCAG and ADA, explain the differences between
                accessibility and compliancy, or help you develop a road map for
                a site that is usable for everyone. Or if you just want to nerd
                out, that's cool too.
              </p>
            </li>
          </ul>
        </section>
        <h2>Say hello!</h2>
        {/* Form */}
      </main>
    </React.Fragment>
  );
};

export default App;
