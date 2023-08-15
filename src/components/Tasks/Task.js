import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal.js';
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPenToSquare,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import taskStyles from './Task.module.css';
import useTodo from '../../hooks/use-todo-context.js';

const Task = ({ id, chore, completedStat }) => {
  const { delTaskHandler, completedHandler, editHandler } = useTodo();
  const [checked, setChecked] = useState(completedStat);
  const [taskIsEditing, setTaskIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(chore);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInputWrong, setIsInputWrong] = useState(false);

  const completeToggleHandler = () => {
    setChecked((checked) => !checked);
  };

  const isEditHandler = () => {
    setTaskIsEditing(true);
  };

  const taskTextEditHandler = (e) => {
    setEditedTaskText(e.target.value);
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    if (editedTaskText === '') {
      setIsInputWrong(true);
    } else {
      editHandler(id, editedTaskText);
      setTaskIsEditing(false);
      setIsInputWrong(false);
    }
  };

  const delModalHandler = () => {
    setIsDeleting(true);
  };

  const confirmHandler = (answer, type) => {
    if (type === 'delete') {
      if (answer === false) {
        setIsDeleting(false);
      } else if (answer === true) {
        delTaskHandler(id);
      }
    } else if (type === 'error') {
      if (answer === false) {
        setIsInputWrong(false);
      }
    }
  };

  useEffect(() => {
    completedHandler(id, checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <>
      {isInputWrong && <Modal onConfirm={confirmHandler} type={'error'} />}
      {isDeleting && <Modal onConfirm={confirmHandler} type={'delete'} />}
      <li
        style={{
          backgroundColor: !checked ? '#A1EED2' : '#ededed',
          color: checked ? '#AEA9A9' : '#000000',
        }}
        className={taskStyles}
      >
        <div className={taskStyles.taskInfoBtn}>
          <label>
            <input
              type='checkbox'
              checked={checked}
              onChange={completeToggleHandler}
            ></input>
          </label>
          {taskIsEditing ? (
            <form type='submit' onSubmit={editSubmitHandler}>
              <input
                type='text'
                onChange={taskTextEditHandler}
                value={editedTaskText}
                className={taskStyles.editInput}
              />
            </form>
          ) : (
            <p
              style={{
                textDecorationLine: !checked ? 'none' : 'line-through',
                textDecorationColor: checked ? '#AEA9A9' : 'none',
                wordWrap: 'break-all',
              }}
            >
              {chore}
            </p>
          )}
        </div>
        <div className={taskStyles.editDelete}>
          {taskIsEditing ? (
            <Button
              type='submit'
              onClick={editSubmitHandler}
              className={taskStyles.editIcon}
              style={{ backgroundColor: !checked ? '#A1EED2' : '#ededed' }}
            >
              <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon>
            </Button>
          ) : (
            <Button
              type='submit'
              onClick={isEditHandler}
              className={taskStyles.editIcon}
              style={{ backgroundColor: !checked ? '#A1EED2' : '#ededed' }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          )}
          <Button
            type='button'
            onClick={delModalHandler}
            className={taskStyles.delIcon}
            style={{ backgroundColor: !checked ? '#A1EED2' : '#ededed' }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </li>
    </>
  );
};

export default Task;
