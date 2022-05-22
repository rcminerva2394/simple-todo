import React from "react";

import Button from "../UI/Button";

const Footer = (props) => {
  return (
    <div>
      <p>{`${props.tasksNum} items left`}</p>
      <div>
        <Button onClick={props.onSummary("All")}>All</Button>
        <Button onClick={props.onSummary("Active")}>Active</Button>
        <Button onClick={props.onSummary("Completed")}>Completed</Button>
      </div>
    </div>
  );
};

export default Footer;
