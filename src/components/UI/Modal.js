import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button.js";

import modalStyles from "./Modal.module.css";

const ModalBackdrop = (props) => {
  return (
    <div className={modalStyles.backdrop} onClick={props.onConfirm}></div>
  );
};

const ModalOverlay = ({ onCancel, onDelete, onModalContent }) => {
  return (
    <div className={modalStyles.modal}>
      <header className={modalStyles.header}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={modalStyles.icon}
        ></FontAwesomeIcon>
        <h2 className={modalStyles.title}>{onModalContent.title}</h2>
      </header>
      <p className={modalStyles.content}>{onModalContent.message}</p>
      <div className={modalStyles.buttons}>
        {onModalContent.type === "delete" ? (
          <div className={modalStyles.buttons}>
            <Button
              type="submit"
              onClick={onCancel}
              className={modalStyles.cancelButton}
            >
              {" "}
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={onDelete}
              className={modalStyles.deleteButton}
            >
              Delete
            </Button>
          </div>
        ) : (
            <Button
              type="submit"
              onClick={onCancel}
              className={modalStyles.cancelButton}
            >
              {" "}
              Okay
            </Button>
          )
        }
      </div>
    </div>
  );
};

const Modal = ({ onConfirm, onModalContent }) => {
  const cancelHandler = () => {
    onConfirm(false, onModalContent.type);
  };

  const deleteHandler = () => {
    onConfirm(true, onModalContent.type);
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onConfirm={cancelHandler} />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCancel={cancelHandler}
          onDelete={deleteHandler}
          onModalContent={onModalContent}
        />,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
