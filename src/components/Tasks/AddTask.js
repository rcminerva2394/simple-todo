import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";

import addTaskStyles from "./AddTask.module.css";
import Modal from "../UI/Modal";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isInputWrong, setIsInputWrong] = useState(false);
  const [modalContent, setModalContent] = useState();

  const addNewTaskHandler = (e) => {
    e.preventDefault();

    if (enteredTask === "") {
      // alert("Please provide a correct input")
      setIsInputWrong(true);
      setModalContent({
        title: "Input is wrong",
        message: "Please write a correct input",
        type: "error",
      });
    } else {
      props.onAddTask(enteredTask);
      setEnteredTask("");
    }
  };

  const newTaskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const confirmHandler =(answer, type) => {
    if(answer === false) {
        setIsInputWrong(false);
      }
  }

  return (
    <React.Fragment>
      {isInputWrong && (
        <Modal onConfirm={confirmHandler} onModalContent={modalContent} />
      )}
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
    </React.Fragment>
  );
};
export default AddTask;
