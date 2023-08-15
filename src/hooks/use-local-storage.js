import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem(key);
    const loadedItems = JSON.parse(items);

    if (loadedItems) {
      setValue(loadedItems);
    }
  }, []);

  useEffect(() => {
    const saveItems = JSON.stringify(value);
    localStorage.setItem(key, saveItems);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
