// package
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";
import { FocusRing } from "@react-aria/focus";

// components
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import Heading from "./components/Heading/Heading";
import Accordion from "./components/Accordion/Accordion";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

// css
import classes from "./App.module.css";

// other pages
import Resume from "./components/pages/Resume/Resume";

const App = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // run on page load
  useEffect(() => {
    if (
      localStorage.darkModeEnabled === "true" ||
      localStorage.darkModeEnabled === "false"
    ) {
      setDarkModeEnabled(
        localStorage.darkModeEnabled === "true" ? true : false
      );
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkModeEnabled(true);
    }
    setTimeout(() => {
      setHasLoaded(true);
    }, 50);
  }, []);

  // run when something changes
  useEffect(() => {
    darkModeEnabled
      ? document.querySelector("body").classList.add("darkMode")
      : document.querySelector("body").classList.remove("darkMode");
  });

  const toggleDarkMode = () => {
    localStorage.setItem("darkModeEnabled", !darkModeEnabled);
    document.querySelector("body").classList.add("toggled");
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/resume" component={Resume} />
        <Route path="/">
          <DarkModeSwitch
            on={darkModeEnabled}
            toggle={toggleDarkMode}
            hasLoaded={hasLoaded}
          />
          <main
            className={[
              classes.main,
              darkModeEnabled ? classes.darkMode : "",
            ].join(" ")}
          >
            <Heading darkModeEnabled={darkModeEnabled} />
            <p className={classes.paragraph}>
              I am a <strong>Web Developer</strong> and{" "}
              <strong>Accessibility Specialist</strong> based in Seattle,
              Washington, doing my part to build an inclusive web.
            </p>
            <p className={classes.paragraph}>
              Currently working full-time as a{" "}
              <strong>Senior Accessibility Engineer</strong> developing
              first-party restaurant ordering platforms, I have previously
              contributed to hundreds of websites and apps in other spaces such
              as healthcare, finance, retail, and entertainment. For more about
              my skills and qualifications,{" "}
              <FocusRing focusRingClass="focus-ring">
                <Link to="/resume" target="_blank" rel="noreferrer">
                  check out my resume{" "}
                  <BiLinkExternal
                    aria-label="Opens in new tab"
                    role="img"
                    focusable="false"
                  />
                </Link>
              </FocusRing>
              .
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
                Above all else, web accessibility is about making your site
                usable for as many people as possible. In our modern age, access
                to technology and the Internet is a human right, regardless of
                one's abilities. This is easy to overlook. It's fun to build new
                apps and websites, but it's less fun to learn that many people
                aren't able to use them. So how do we address this?
              </p>
              {/* <p className={classes.paragraph}>
                Accessibility tends to show up late; the topic is often ignored
                during tech education and is often an afterthought in web and
                app projects. Implementing accessibility can therefore appear to
                be a daunting task, but my hope is to ease this process as much
                as possible and eventually rethink how we approach design and
                development by including accessibility in the earliest possible
                stages.
                It's never too late to work on accessibility, but it's never too early either.
              </p> */}
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
              <Accordion
                darkModeEnabled={darkModeEnabled}
                hasLoaded={hasLoaded}
              />
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
              <p className={classes.paragraph}>
                Email me at{" "}
                <FocusRing focusRingClass="focus-ring">
                  <a href="mailto:james.t.davey@gmail.com">
                    james.t.davey@gmail.com{" "}
                    <BiMailSend
                      aria-label="Composes a new email"
                      role="img"
                      focusable="false"
                    />
                  </a>
                </FocusRing>
                ,{" "}
                <FocusRing focusRingClass="focus-ring">
                  <a
                    href="https://www.linkedin.com/in/jamesthomasdavey/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    visit my LinkedIn{" "}
                    <BiLinkExternal
                      aria-label="Opens in new tab"
                      role="img"
                      focusable="false"
                    />
                  </a>
                </FocusRing>
                , or send a message using the form below:
              </p>
              <ContactForm
                darkModeEnabled={darkModeEnabled}
                hasLoaded={hasLoaded}
              />
            </section>
          </main>
          <Footer darkModeEnabled={darkModeEnabled} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
