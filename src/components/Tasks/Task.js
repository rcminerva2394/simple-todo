import React, { useState, useEffect } from "react";

import Modal from "../UI/Modal.js";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./Task.module.css";

const Task = (props) => {
  const { id, chore, completedStat, onDelete, onCompleted, onEdit } = props;
  const [checked, setChecked] = useState(completedStat);
  const [taskIsEditing, setTaskIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(chore);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [isInputWrong, setIsInputWrong] = useState(false);

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
  };

  const editHandler = () => {
    setTaskIsEditing(true);
  };

  const taskTextEditHandler = (e) => {
    setEditedTaskText(e.target.value);

  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    if (editedTaskText === "") {
      // alert("Please provide a correct input");
      setIsInputWrong(true);
      setModalContent({title: "Input is wrong", message: "Please write a correct input", type: "error"})
    } else {
      onEdit(id, editedTaskText);
      setTaskIsEditing(false);
      setIsInputWrong(false);
    }
  };

  const delModalHandler = () => {
    setIsDeleting(true);
    setModalContent({title: "Are you sure?", message: "Do you really want to delete this?", type: "delete"})
  };

  const confirmHandler = (answer, type) => {
    if (type === "delete") {
      if (answer === false) {
        setIsDeleting(false);
        setModalContent("")
      } else if (answer === true) {
        onDelete(id);
      }

    } else if (type === "error") {
      if(answer === false) {
        setIsInputWrong(false);
        setModalContent("")
      }
    }
    
  };

  useEffect(() => {
    onCompleted(id, checked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <React.Fragment>
      {isInputWrong && <Modal onConfirm={confirmHandler} onModalContent={modalContent} />}
      {isDeleting && <Modal onConfirm={confirmHandler} onModalContent={modalContent} />}
      <li
        style={{
          backgroundColor: !checked ? "#A1EED2" : "#ededed",
          color: checked ? "#AEA9A9" : "#000000",
        }}
        className={taskStyles}
      >
        <div className={taskStyles.taskInfoBtn}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={completeToggleHandler}
            ></input>
          </label>
          {taskIsEditing ? (
            <form type="submit" onSubmit={editSubmitHandler}>
              <input
                type="text"
                onChange={taskTextEditHandler}
                value={editedTaskText}
                className={taskStyles.editInput} 
               
              />
            </form>
          ) : (
            <p
              style={{
                textDecorationLine: !checked ? "none" : "line-through",
                textDecorationColor: checked ? "#AEA9A9" : "none",
                wordWrap: "break-all"
              }}
            >
              {chore}
            </p>
          )}
        </div>
        <div className={taskStyles.editDelete}>
          {" "}
          {taskIsEditing ? (
            <Button
              type="submit"
              onClick={editSubmitHandler}
              className={taskStyles.editIcon}
              style={{ backgroundColor: !checked ? "#A1EED2" : "#ededed" }}
            >
              <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon>
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={editHandler}
              className={taskStyles.editIcon}
              style={{ backgroundColor: !checked ? "#A1EED2" : "#ededed" }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          )}
          <Button
            type="button"
            onClick={delModalHandler}
            className={taskStyles.delIcon}
            style={{ backgroundColor: !checked ? "#A1EED2" : "#ededed" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Task;
