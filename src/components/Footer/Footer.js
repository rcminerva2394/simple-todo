import React from 'react';
import Button from '../UI/Button';
import footerStyles from './Footer.module.css';
import useTodo from '../../hooks/use-todo-context';

const Footer = () => {
  const { tasksList, setFilterTasksList, setIsFiltering } = useTodo();

  const summaryHandler = (category) => {
    setIsFiltering(true);
    switch (category) {
      case 'All':
        setFilterTasksList(tasksList);
        break;
      case 'Active':
        const activeList = tasksList.filter((task) => task.completed === false);
        setFilterTasksList(activeList);
        break;
      case 'Completed':
        const completedList = tasksList.filter(
          (task) => task.completed === true
        );
        setFilterTasksList(completedList);
        break;
      default:
        break;
    }
  };

  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.number}>
        {tasksList.length <= 1
          ? `${tasksList.length} item left`
          : `${tasksList.length} items left`}
      </p>
      <div>
        <Button
          className={footerStyles.button}
          onClick={() => {
            summaryHandler('All');
          }}
        >
          All
        </Button>
        <Button
          className={footerStyles.button}
          onClick={() => {
            summaryHandler('Active');
          }}
        >
          Active
        </Button>
        <Button
          className={footerStyles.button}
          onClick={() => {
            summaryHandler('Completed');
          }}
        >
          Completed
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
