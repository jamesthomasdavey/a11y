import React from "react";

const DarkModeSwitch = ({ on, toggle }) => {
  return (
    <button onClick={toggle} role="switch" aria-checked={on ? "true" : "false"}>
      Dark mode
    </button>
  );
};

export default DarkModeSwitch;
