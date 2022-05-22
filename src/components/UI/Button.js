import React from "react";

import buttonStyles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${buttonStyles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {" "}
      {props.children}
    </button>
  );
};

export default Button;
