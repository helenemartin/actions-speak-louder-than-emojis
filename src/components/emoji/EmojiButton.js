import React from "react";

const AriaDiv = ({ className, children, onClick, onKeyDown }) => {
  return (
    <div
      role="button"
      aria-pressed="false"
      tabIndex="0"
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

export default AriaDiv;
