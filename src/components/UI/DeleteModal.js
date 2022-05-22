import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button.js";

import deleteModalStyles from "./DeleteModal.module.css";

const ModalBackdrop = (props) => {
  return (
    <div className={deleteModalStyles.backdrop} onClick={props.onConfirm}></div>
  );
};

const ModalOverlay = (props) => {
  return (
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
        <Button
          type="submit"
          onClick={props.onCancel}
          className={deleteModalStyles.cancelButton}
        >
          {" "}
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={props.onDelete}
          className={deleteModalStyles.deleteButton}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

const DeleteModal = (props) => {
  const cancelHandler = () => {
    props.onConfirm(false);
  };

  const deleteHandler = () => {
    props.onConfirm(true);
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onConfirm={cancelHandler} />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCancel={cancelHandler} onDelete={deleteHandler} />,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
};

export default DeleteModal;
