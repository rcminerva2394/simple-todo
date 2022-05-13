import React from "react";

import "./TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          chore={task.chore}
          onDelete={props.onDelTask}
        ></Task>
      ))}
    </ul>
  );
};

export default TaskList;

/** Try to explore useEffect with dependencies later on
 * incorporate local storage as well for saving the dated tasks
 */
