import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./Task.module.css";

const Task = (props) => {
  const { id, chore, completedStat, onDelete, completed, edit } = props;
  const [checked, setChecked] = useState(completedStat);
  const [taskIsEditing, setTaskIsEditing] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
  };

  const editHandler = () => {
    setTaskIsEditing(id);
  };

  const taskTextEditHandler = (e) => {
    setEditedTaskText(e.target.value);
  };

  const editSubmitHandler = () => {
    edit(id, editedTaskText);
    console.log(editedTaskText)

  }
  const deleteHandler = (id) => {
    onDelete(id);
  };

  useEffect(() => {
    completed(id, checked);
  }, [checked]);

  return (
    <li
      style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
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
        {id === taskIsEditing ? (
          <input
            type="text"
            onChange={taskTextEditHandler}
            value={editedTaskText}
          />
        ) : (
          <p
            style={{
              textDecorationLine: !checked ? "none" : "line-through",
              textDecorationColor: checked ? "white" : "none",
            }}
          >
            {chore}
          </p>
        )}
      </div>
      <div className={taskStyles.editDelete}>
        <button
          type="submit"
          onClick={editHandler}
          className={taskStyles.editIcon}
          style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          type="submit"
          onClick={editSubmitHandler}
          style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
        >
          <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon>
        </button>

        <button
          type="submit" onClick=
          {(e) => {
            e.preventDefault();
            deleteHandler(id);
          }}
          className={taskStyles.delIcon}
          style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;
