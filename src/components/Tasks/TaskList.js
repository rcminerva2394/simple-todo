import React from "react";

import "./TaskList.css";
import Task from "./Task";

const TaskList = ({tasks, onDelTask, onCompleted, onEdit}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          chore={task.chore}
          completedStat={task.completed}
          onDelete={onDelTask}
          onCompleted={onCompleted}
          onEdit={onEdit}
        ></Task>
      ))}
    </ul>
  );
};

export default TaskList;
