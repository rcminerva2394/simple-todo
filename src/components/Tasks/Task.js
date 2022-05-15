import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./Task.module.css";

const Task = (props) => {
  const { id, chore, completedStat, onDelete, completed } = props;

  const [checked, setChecked] = useState(completedStat);

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
  };

  const editHandler = (e) => {};

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

        <p
          style={{
            textDecorationLine: !checked ? "none" : "line-through",
            textDecorationColor: checked ? "white" : "none",
          }}
        >
          {chore}
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
            deleteHandler(id);
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
