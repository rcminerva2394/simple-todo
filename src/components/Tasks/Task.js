import React, { useState, useEffect } from "react";

import DeleteModal from "../UI/DeleteModal";

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
  const [editedTaskText, setEditedTaskText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
  };

  const editHandler = () => {
    setTaskIsEditing(true);
  };

  const taskTextEditHandler = (e) => {
    setEditedTaskText(e.target.value);
  };

  const editSubmitHandler = () => {
    onEdit(id, editedTaskText);
    console.log(editedTaskText);
    setTaskIsEditing(false);
  };

  const delModalHandler = () => {
    setIsDeleting(true);
  };

  const confirmHandler = (answer) => {
    if (answer === false) {
      setIsDeleting(false);
    } else if (answer === true) {
      onDelete(id);
    }
  };

  useEffect(() => {
    onCompleted(id, checked);
  }, [checked]);

  return (
    <React.Fragment>
      {isDeleting && <DeleteModal onConfirm={confirmHandler} />}
      <li
        style={{ backgroundColor: !checked ?  "#A1EED2" : "#ededed", 
        color: checked ? "#AEA9A9" : "#000000" }}
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
            <input
              type="text"
              onChange={taskTextEditHandler}
              value={editedTaskText}
              className={taskStyles.editInput}
            />
          ) : (
            <p
              style={{
                textDecorationLine: !checked ? "none" : "line-through",
                textDecorationColor: checked ? "#AEA9A9" : "none",
              }}
            >
              {chore}
            </p>
          )}
        </div>
        <div className={taskStyles.editDelete}>
          {" "}
          {taskIsEditing ? (
            <button
              type="submit"
              onClick={editSubmitHandler}
              className={taskStyles.editIcon}
              style={{backgroundColor: !checked ?  "#A1EED2" : "#ededed"  }}
            >
              <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon>
            </button>
          ) : (
            <button
              type="submit"
              onClick={editHandler}
              className={taskStyles.editIcon}
              style={{ backgroundColor: !checked ?  "#A1EED2" : "#ededed"  }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          )}
          <button
            type="button"
            onClick={delModalHandler}
            className={taskStyles.delIcon}
            style={{ backgroundColor: !checked ?  "#A1EED2" : "#ededed" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Task;
