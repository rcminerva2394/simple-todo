import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Button from './Button.js';

import modalStyles from './Modal.module.css';

const content = {
  error: {
    title: 'Input is wrong',
    message: 'Please write a correct input',
  },
  delete: {
    title: 'Are you sure?',
    message: 'Do you really want to delete this?',
  },
};

const ModalBackdrop = (props) => {
  return <div className={modalStyles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = ({ onCancel, onDelete, type }) => {
  return (
    <div className={modalStyles.modal}>
      <header className={modalStyles.header}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={modalStyles.icon}
        ></FontAwesomeIcon>
        <h2 className={modalStyles.title}>{content[type].title}</h2>
      </header>
      <p className={modalStyles.content}>{content[type].message}</p>
      <div className={modalStyles.buttons}>
        {type === 'delete' ? (
          <div className={modalStyles.buttons}>
            <Button
              type='submit'
              onClick={onCancel}
              className={modalStyles.cancelButton}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              onClick={onDelete}
              className={modalStyles.deleteButton}
            >
              Delete
            </Button>
          </div>
        ) : (
          <Button
            type='submit'
            onClick={onCancel}
            className={modalStyles.cancelButton}
          >
            Okay
          </Button>
        )}
      </div>
    </div>
  );
};

const Modal = ({ onConfirm, type }) => {
  const cancelHandler = () => {
    onConfirm(false, type);
  };

  const deleteHandler = () => {
    onConfirm(true, type);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onConfirm={cancelHandler} />,
        document.getElementById('modal-backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCancel={cancelHandler}
          onDelete={deleteHandler}
          type={type}
        />,
        document.getElementById('modal-overlay')
      )}
    </>
  );
};

export default Modal;
