import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./TaskList.module.css";

const TaskList = (props) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked((checked) => !checked);
  };

  const editHandler = (e) => {};

  const deleteHandler = (id) => {
    props.onDelTask(id);
  };

  return (
    <ul className={taskStyles.list}>
      {props.tasks.map((task) => (
        <li
          key={task.id}
          style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
        >
          <div className={taskStyles.taskInfoBtn}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={checkHandler}
              ></input>
            </label>

            <p style={{textDecorationLine: !checked ? "none" : "line-through", textDecorationColor: checked ? "white" : "none"}}>
             {task.chore}
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
                deleteHandler(task.id);
              }}
              className={taskStyles.delIcon}
              style={{ backgroundColor: !checked ? "#ededed" : "#90E0C3" }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

/** Try to explore useEffect with dependencies later on */
