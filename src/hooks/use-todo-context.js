import { useContext } from 'react';
import { TodoContext } from '../context/todo-context';

function useTodo() {
  return useContext(TodoContext);
}

export default useTodo;
