import React from "react";

import Button from "../UI/Button";

const Footer = (props) => {
  const { tasksNum, onSummary } = props;
  return (
    <div>
      <p>{`${tasksNum} items left`}</p>
      <div>
        <Button
          onClick={() => {
            onSummary("All");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            onSummary("Active");
          }}
        >
          Active
        </Button>
        <Button
          onClick={() => {
            onSummary("Completed");
          }}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default Footer;
