import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';
import addTaskStyles from './AddTask.module.css';
import Modal from '../UI/Modal';
import useTodo from '../../hooks/use-todo-context';

const AddTask = () => {
  const { addTaskHandler } = useTodo();
  const [enteredTask, setEnteredTask] = useState('');
  const [isInputWrong, setIsInputWrong] = useState(false);

  const addNewTaskHandler = (e) => {
    e.preventDefault();

    if (enteredTask === '') {
      setIsInputWrong(true);
    } else {
      addTaskHandler(enteredTask);
      setEnteredTask('');
    }
  };

  const confirmHandler = (answer) => {
    if (answer === false) {
      setIsInputWrong(false);
    }
  };

  return (
    <>
      {isInputWrong && <Modal onConfirm={confirmHandler} type={'error'} />}
      <div className={addTaskStyles.task}>
        <form onSubmit={addNewTaskHandler}>
          <label htmlFor='task'></label>
          <input
            id='task'
            type='text'
            onChange={(e) => setEnteredTask(e.target.value)}
            placeholder='Write a new task...'
            value={enteredTask}
          ></input>
          <Button type='submit' className={addTaskStyles.button}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </form>
      </div>
    </>
  );
};
export default AddTask;
