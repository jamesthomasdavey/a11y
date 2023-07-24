import React, { useState, useEffect } from "react";

const Tooltip = () => {
  const [tooltipExpanded, setTooltipExpanded] = useState(false);

  const expandTooltip = () => {
    setTooltipExpanded(true);
  };

  const collapseTooltip = () => {
    setTooltipExpanded(false);
  };

  const potentiallyCollapseTooltip = () => {
    collapseTooltip();
  };

  return (
    <React.Fragment>
      <p>
        <button>sdfadsf</button>
      </p>
      <p>stuff</p>
      <button
        onMouseEnter={expandTooltip}
        onMouseLeave={potentiallyCollapseTooltip}
        onFocus={expandTooltip}
        onBlur={potentiallyCollapseTooltip}
        onClick={expandTooltip}
        aria-label="Information"
      >
        ℹ️
      </button>
      <div role="alert">{tooltipExpanded && <div>TOOLTIP CONTENT</div>}</div>
      <p>stuff</p>
      <p>
        <button>stdsfadg</button>
      </p>
    </React.Fragment>
  );
};

export default Tooltip;
