import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/use-local-storage';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [tasksList, setTasksList] = useLocalStorage('tasksList');
  const [filterTasksList, setFilterTasksList] = useState(tasksList);
  const [isFiltering, setIsFiltering] = useState(false);

  const addTaskHandler = (newTask) => {
    setTasksList((prevTasksList) => {
      return [
        ...prevTasksList,
        { chore: newTask, id: Math.random().toString(), completed: false },
      ];
    });

    setIsFiltering(false);
  };

  const delTaskHandler = (id) => {
    const updatedTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTaskList);

    const summaryUpdatedList = filterTasksList.filter((task) => task.id !== id);
    setFilterTasksList(summaryUpdatedList);
  };

  const completedHandler = (id, checked) => {
    const updatedTaskList = tasksList.map((task) => {
      if (task.id === id) {
        if (task.completed !== checked) {
          task.completed = checked;
        }
      }
      return task;
    });
    setTasksList(updatedTaskList);
  };

  const editHandler = (id, editedTaskText) => {
    const updatedTaskList = tasksList.map((task) => {
      if (task.id === id) {
        task.chore = editedTaskText;
      }
      return task;
    });
    setTasksList(updatedTaskList);
  };

  const value = {
    tasksList,
    setTasksList,
    filterTasksList,
    setFilterTasksList,
    isFiltering,
    setIsFiltering,
    addTaskHandler,
    delTaskHandler,
    completedHandler,
    editHandler,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { TodoContext };
export default TodoProvider;
