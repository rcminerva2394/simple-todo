import React from "react";

import Button from "../UI/Button";
import footerStyles from "./Footer.module.css";

const Footer = (props) => {
  const { tasksNum, onSummary } = props;
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.number}>
        {tasksNum <= 1 ? `${tasksNum} item left` : `${tasksNum} items left`}
      </p>
      <div>
        <Button
          className={footerStyles.button}
          onClick={() => {
            onSummary("All");
          }}
        >
          All
        </Button>
        <Button
          className={footerStyles.button}
          onClick={() => {
            onSummary("Active");
          }}
        >
          Active
        </Button>
        <Button
          className={footerStyles.button}
          onClick={() => {
            onSummary("Completed");
          }}
        >
          Completed
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
