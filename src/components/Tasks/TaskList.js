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
          completedStat={task.completed}
          onDelete={props.onDelTask}
          completed={props.onCompleted}
        ></Task>
      ))}
    </ul>
  );
};

export default TaskList;
