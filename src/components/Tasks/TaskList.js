import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

import taskStyles from "./TaskList.module.css";

const TaskList = (props) => {
  const doneHandler = (e) => {

    e.preventDefault();
  };

  const editHandler = (e) => {};

  const deleteHandler = (id) => {
    props.onDelTask(id)
  };

  return (
    <ul className={taskStyles.list}>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <div className={taskStyles.taskInfoBtn}>
            <button type="submit" onClick={doneHandler}>
              <FontAwesomeIcon
                icon={faSquareCheck}
                className={taskStyles.cmpltIcon}
              />
            </button>
            <p>{task.taskInfo}</p>
          </div>
          <div className={taskStyles.editDelete}>
            <button
              type="submit"
              onClick={editHandler}
              className={taskStyles.editIcon}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              type="submit"
              onClick={(e) => {e.preventDefault(); deleteHandler(task.id)}}
              className={taskStyles.delIcon}
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
