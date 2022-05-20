import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import addTaskStyles from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addNewTaskHandler = (e) => {
    e.preventDefault();
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  const newTaskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  return (
    <div className={addTaskStyles.task}>
      <form onSubmit={addNewTaskHandler}>
        <label htmlFor="task"></label>
        <input
          id="task"
          type="text"
          onChange={newTaskChangeHandler}
          placeholder="Write a new task..."
          value={enteredTask}
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
