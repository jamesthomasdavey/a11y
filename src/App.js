import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";

import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import Heading from "./components/Heading/Heading";
import Accordion from "./components/Accordion/Accordion";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";

const App = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (
      localStorage.darkModeEnabled === "true" ||
      localStorage.darkModeEnabled === "false"
    ) {
      setDarkModeEnabled(
        localStorage.darkModeEnabled === "true" ? true : false
      );
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("nerds");
      setDarkModeEnabled(true);
    }
  }, []);

  useEffect(() => {
    darkModeEnabled
      ? document.querySelector("body").classList.add("darkMode")
      : document.querySelector("body").classList.remove("darkMode");
  });

  return (
    <React.Fragment>
      <DarkModeSwitch
        on={darkModeEnabled}
        toggle={() => {
          localStorage.setItem("darkModeEnabled", !darkModeEnabled);
          setDarkModeEnabled(!darkModeEnabled);
        }}
      />
      <main className={classes.main}>
        <Heading darkModeEnabled={darkModeEnabled} />
        <p className={classes.paragraph}>
          I mostly work on accessibility for restaurants' online ordering
          platforms, but I do other things too. As an{" "}
          <strong>Accessibility Engineer</strong>, I love the challenge of
          deconstructing unfamiliar or complex interfaces into simplified
          operable parts. Few things satisfy me more than using a keyboard to
          navigate a newly-remediated site with the screen reader on.
        </p>
        <section>
          <h2
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            I do web accessibility.
          </h2>
          <p className={classes.paragraph}>
            Accessibility is often either ignored or only briefly mentioned in
            front-end development courses and bootcamps. When developers hear
            about accessibility, often much later in their career, they realize
            they must unlearn and relearn basic techniques. My hope is to ease
            this process as much as possible.
            {/* I've stared at enough wireframes and tested enough interfaces to
            intuitively know what semantic information is necessary and what
            keystrokes would be the most predictable. */}{" "}
            Show me an inaccessible product, and I'll show you approaches
            ranging from most convenient to most robust. For more about my
            qualifications,{" "}
            <a
              href="https://jamesthomasdavey.com/resume"
              target="_blank"
              rel="noreferrer"
            >
              check out my resume{" "}
              <BiLinkExternal
                aria-label="Opens in new tab"
                role="img"
                focusable="false"
              />
            </a>
            .
          </p>
          <p className={classes.paragraph}>
            If accessibility is included during the design phase, then
            accessible developing should be as simple as using code to uphold
            the affordances and content from the design. If accessibility is
            included later, it may take more work, but you still have options.
            It's never too late to start accessibility, but it's never too early
            either.
          </p>
        </section>
        <section>
          <h2
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            Things I can do.
          </h2>
          <Accordion darkModeEnabled={darkModeEnabled} />
        </section>
        <section>
          <h2
            id="say-hello-heading"
            className={[
              classes.h2,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            <span
              className={[
                classes.emoji,
                darkModeEnabled ? classes.darkMode : "",
              ].join(" ")}
              aria-hidden="true"
            >
              👋
            </span>{" "}
            Say hello!
          </h2>
          <ContactForm darkModeEnabled={darkModeEnabled} />
        </section>
      </main>
      <Footer darkModeEnabled={darkModeEnabled} />
    </React.Fragment>
  );
};

export default App;
