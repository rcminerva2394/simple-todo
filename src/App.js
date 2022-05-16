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
        { chore: newTask, id: Math.random().toString(), completed: false },
      ];
    });
  };

  const delTaskHandler = (id) => {
    const updatedTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTaskList);
  };

  const completedHandler = (id, checked) => {
    const updatedTaskList = tasksList.map((task) => {
      if (task.id === id) {
        if (task.completed !== checked) {
          task.completed = checked;
        }
      }
      return task;
    });
    setTasksList(updatedTaskList);
  };

  const editHandler = (id, editedTaskText) => {
    const updatedTaskList = tasksList.map((task) => {
      if(task.id === id) {
        task.chore = editedTaskText;
      }
      return task;
    })
    setTasksList(updatedTaskList);
  }

  return (
    <div className="todo-form">
      <h2>My Simple Todo</h2>
      <AddTask onAddTask={addTaskHandler}></AddTask>
      <Tasklist
        tasks={tasksList}
        onDelTask={delTaskHandler}
        onCompleted={completedHandler}
        onEdit= {editHandler}
      ></Tasklist>
    </div>
  );
}

export default App;
