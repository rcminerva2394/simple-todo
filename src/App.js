import React, { useState } from "react";

import "./App.css";
import AddTask from "./components/Tasks/AddTask";
import Tasklist from "./components/Tasks/TaskList";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (newTask) => {
    setTasksList((prevTasksList) => {
      return [
        ...prevTasksList,
        { taskInfo: newTask, id: Math.random().toString() },
      ];
    });
  };

  const delTaskHandler = (newTasksList) => {
    setTasksList(newTasksList);
  };

  return (
    <div className="todo-form">
      <h2>My Simple Todo</h2>
      <AddTask onAddTask={addTaskHandler}></AddTask>
      <Tasklist tasks={tasksList} onDelTask={delTaskHandler}></Tasklist>
    </div>
  );
}

export default App;
