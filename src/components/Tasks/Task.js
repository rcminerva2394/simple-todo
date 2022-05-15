import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./Task.module.css";

const Task = (props) => {
  const [checked, setChecked] = useState(false);

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
    props.completed(props.id, checked);
  };

  const editHandler = (e) => {};

  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  useEffect(() => {
    props.completed(props.id, checked)
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

        <p
          style={{
            textDecorationLine: !checked ? "none" : "line-through",
            textDecorationColor: checked ? "white" : "none",
          }}
        >
          {props.chore}
        </p>
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
          onClick={(e) => {
            e.preventDefault();
            deleteHandler(props.id);
          }}
          className={taskStyles.delIcon}
          style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Task;


/* Update the task or chore item, and add completed status on the object back to parent App.js*/