import React, { useState, useEffect } from "react";

import "./App.css";
import AddTask from "./components/Tasks/AddTask";
import Tasklist from "./components/Tasks/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [tasksList, setTasksList] = useState([]);
  const [filterTasksList, setFilterTasksList] = useState(null);

  useEffect(() => {
    const getTasksList = localStorage.getItem("tasksList");
    const loadedTasksList = JSON.parse(getTasksList);

    if (loadedTasksList) {
      setTasksList(loadedTasksList);
    }
  }, []);

  useEffect(() => {
    const saveTasksList = JSON.stringify(tasksList);
    localStorage.setItem("tasksList", saveTasksList);
  }, [tasksList]);

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

    const summaryUpdatedList = filterTasksList.filter((task) => task.id !== id);
    setFilterTasksList(summaryUpdatedList);
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
      if (task.id === id) {
        task.chore = editedTaskText;
      }
      return task;
    });
    setTasksList(updatedTaskList);
  };

  const summaryHandler = (category) => {
    if (category === "All") {
      setFilterTasksList(tasksList);
    } else if (category === "Active") {
      const activeList = tasksList.filter((task) => task.completed === false);
      setFilterTasksList(activeList);
    } else if (category === "Completed") {
      const completedList = tasksList.filter((task) => task.completed === true);
      setFilterTasksList(completedList);
    }
  };
  return (
    <div className="todo-form">
      <h2>My Simple Todo</h2>
      <AddTask onAddTask={addTaskHandler}></AddTask>
      <Tasklist
        tasks={filterTasksList ? filterTasksList : tasksList}
        onDelTask={delTaskHandler}
        onCompleted={completedHandler}
        onEdit={editHandler}
      ></Tasklist>
      <Footer tasksNum={tasksList.length} onSummary={summaryHandler}></Footer>
    </div>
  );
};

export default App;
