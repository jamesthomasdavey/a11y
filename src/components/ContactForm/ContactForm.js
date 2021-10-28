import React, { Component } from "react";
import isEmail from "is-email";
import { MdErrorOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";

import classes from "./ContactForm.module.css";

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

function submitForm(name, email, message) {
  var destinationEndpoint = "xvodnjpl";
  var form = document.createElement("form");
  form.setAttribute("action", "https://formspree.io/" + destinationEndpoint);
  form.setAttribute("method", "POST");
  // Subject for your email
  var field = document.createElement("input");
  field.setAttribute("type", "hidden");
  field.setAttribute("name", "_subject");
  field.setAttribute("value", "Contact form submitted");
  form.appendChild(field);

  // Contact email address
  field = document.createElement("input");
  field.setAttribute("type", "hidden");
  field.setAttribute("name", "email");
  field.setAttribute("value", email);
  form.appendChild(field);

  // Your user's name
  field = document.createElement("input");
  field.setAttribute("type", "hidden");
  field.setAttribute("name", "name");
  field.setAttribute("value", name);
  form.appendChild(field);

  // The text message
  field = document.createElement("input");
  field.setAttribute("type", "hidden");
  field.setAttribute("name", "message");
  field.setAttribute("value", message);
  form.appendChild(field);

  document.body.appendChild(form);
  form.submit();
}

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: {},
    focus: "",
    isSubmitting: false,
    hasFailed: false,
    hasSubmitted: false,
  };

  refocus = () => {
    if (this.state.focus === "name") {
      this.nameInput.focus();
    } else if (this.state.focus === "email") {
      this.emailInput.focus();
    } else if (this.state.focus === "message") {
      this.messageTextarea.focus();
    }
  };
  changeInputHandler = (e) => {
    const eventTargetName = e.target.name;
    this.setState({ [eventTargetName]: e.target.value }, () => {
      if (this.state.hasFailed) {
        this.checkForErrors();
      }
    });
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true }, () => {
      this.checkForErrors(() => {
        this.setState(
          {
            errors: {},
            focus: "",
            hasFailed: false,
            hasSubmitted: true,
          },
          () => {
            submitForm(this.state.name, this.state.email, this.state.message);
          }
        );
      });
    });
  };
  checkForErrors = (callback) => {
    const errors = {};
    if (!this.state.name) {
      errors.name = "Please enter your name.";
    }
    if (!isEmail(this.state.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!this.state.email) {
      errors.email = "Please enter your email address.";
    }
    if (this.state.message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }
    if (!this.state.message) {
      errors.message = "Please enter a message.";
    }
    let hasFailed = !isEmpty(errors);
    if (this.state.hasFailed) {
      hasFailed = true;
    }
    let focus;
    if (callback) {
      if (errors.message) {
        focus = "message";
      }
      if (errors.email) {
        focus = "email";
      }
      if (errors.name) {
        focus = "name";
      }
    }
    let isSubmitting = false;
    if (callback) {
      if (isEmpty(errors)) {
        isSubmitting = true;
      }
    }
    this.setState({ errors, hasFailed, isSubmitting, focus }, () => {
      if (isEmpty(errors)) {
        if (callback) {
          callback();
        }
      } else {
        this.refocus();
      }
    });
  };
  render() {
    let serverErrorMessage;
    let successMessage;
    let charactersRemaining;
    if (this.state.errors.server) {
      serverErrorMessage = (
        <p aria-live="assertive">{this.state.errors.server}</p>
      );
    }
    if (this.state.hasSubmitted) {
      successMessage = <p aria-live="assertive">Redirecting...</p>;
    }
    if (this.state.message) {
      charactersRemaining = this.state.errors.message ? (
        ""
      ) : (
        <span aria-live="polite" aria-atomic="true">
          Characters remaining: {1000 - this.state.message.length}
        </span>
      );
    }
    return (
      <form
        className={[
          classes.wrapper,
          this.state.isSubmitting ? classes.loading : "",
        ].join(" ")}
        noValidate
        onSubmit={this.formSubmitHandler}
        role="group"
        aria-labelledby="say-hello-heading"
      >
        <label className={classes.label} htmlFor="name">
          Name:
        </label>
        <input
          ref={(input) => {
            this.nameInput = input;
          }}
          onChange={this.changeInputHandler}
          type="text"
          name="name"
          id="name"
          aria-describedby="nameError"
          aria-invalid={this.state.errors.name ? "true" : undefined}
          className={[
            classes.input,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
          maxLength="100"
          value={this.state.name}
          autoComplete="name"
        />
        <span
          id="nameError"
          className={[
            classes.errorMessage,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
        >
          {this.state.errors.name && (
            <MdErrorOutline
              className={classes.errorIcon}
              aria-label="Error:"
              role="img"
              focusable="false"
            />
          )}{" "}
          {this.state.errors.name && this.state.errors.name}
        </span>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <input
          ref={(input) => {
            this.emailInput = input;
          }}
          htmlFor="email"
          type="email"
          id="email"
          aria-describedby="emailError"
          aria-invalid={this.state.errors.email ? "true" : undefined}
          name="email"
          onChange={this.changeInputHandler}
          className={[
            classes.input,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
          maxLength="100"
          value={this.state.email}
          autoComplete="email"
        />
        <span
          id="emailError"
          className={[
            classes.errorMessage,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
        >
          {this.state.errors.email && (
            <MdErrorOutline
              className={classes.errorIcon}
              aria-label="Error:"
              role="img"
              focusable="false"
            />
          )}{" "}
          {this.state.errors.email && this.state.errors.email}
        </span>
        <label className={classes.label} htmlFor="message">
          Message:
        </label>
        <textarea
          ref={(textarea) => {
            this.messageTextarea = textarea;
          }}
          id="message"
          aria-describedby="messageError"
          aria-invalid={this.state.errors.message ? "true" : undefined}
          name="message"
          onChange={this.changeInputHandler}
          className={[
            classes.input,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
          maxLength="1000"
          value={this.state.message}
        />
        <span
          id="messageError"
          className={[
            classes.errorMessage,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
        >
          {this.state.errors.message && (
            <MdErrorOutline
              className={classes.errorIcon}
              aria-label="Error:"
              role="img"
              focusable="false"
            />
          )}{" "}
          {this.state.errors.message && this.state.errors.message}
        </span>
        {charactersRemaining}
        <button
          type="submit"
          className={[
            classes.sendButton,
            this.props.darkModeEnabled ? classes.darkMode : "",
          ].join(" ")}
          aria-describedby="redirect-warning"
        >
          Send{" "}
          <FiSend
            className={classes.paperPlane}
            aria-hidden="true"
            focusable="false"
          />
        </button>
        <span id="redirect-warning">
          Upon submitting, you will be redirected to an external site.
        </span>
        {serverErrorMessage}
        {successMessage}
      </form>
    );
  }
}

export default ContactForm;
