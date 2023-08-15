import React from 'react';
import './TaskList.css';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          chore={task.chore}
          completedStat={task.completed}
        ></Task>
      ))}
    </ul>
  );
};

export default TaskList;
