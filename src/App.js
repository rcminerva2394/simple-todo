import React from 'react';
import './App.css';
import AddTask from './components/Tasks/AddTask';
import Tasklist from './components/Tasks/TaskList';
import Footer from './components/Footer/Footer';
import useTodo from './hooks/use-todo-context';

const App = () => {
  const { tasksList, filterTasksList, isFiltering } = useTodo();

  return (
    <div className='todo-form'>
      <h2>My Simple Todo</h2>
      <AddTask />
      <Tasklist tasks={isFiltering ? filterTasksList : tasksList} />
      <Footer />
    </div>
  );
};

export default App;
