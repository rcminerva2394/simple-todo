import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import deleteModalStyles from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  const cancelHandler = () => {
    props.onConfirm(false);
  };

  const deleteHandler = () => {
    props.onConfirm(true);
  };
  return (
    <div>
      <div className={deleteModalStyles.backdrop} onClick={cancelHandler}></div>
      <div className={deleteModalStyles.modal}>
        <header className={deleteModalStyles.header}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={deleteModalStyles.icon}
          ></FontAwesomeIcon>
          <h2 className={deleteModalStyles.title}>Are you sure?</h2>
        </header>
        <p className={deleteModalStyles.content}>
          Do you really want to delete this?
        </p>
        <div className={deleteModalStyles.buttons}>
          <button type="submit" onClick={cancelHandler} >
            Cancel
          </button>
          <button type="submit" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
