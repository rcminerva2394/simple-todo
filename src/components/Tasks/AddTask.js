import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";

import addTaskStyles from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addNewTaskHandler = (e) => {
    e.preventDefault();

    if (enteredTask === "") {
      alert("Please provide a correct input")
    } else {
      props.onAddTask(enteredTask);
      setEnteredTask("");
    }
   
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
        <Button type="submit" className={addTaskStyles.button}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
