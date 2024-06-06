import { useState } from 'react';

// Custom hook to manage state with localStorage
const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Use lazy initialization to avoid reading from localStorage on every render
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get the item from localStorage by key
      const item = window.localStorage.getItem(key);
      // Parse and return the stored json or, if none exists, return the initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initial value
      console.log(error);
      return initialValue;
    }
  });

  // Set the value both in state and in localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Log the error
      console.log(error);
    }
  };

  // Return the stored value and a function to update it
  return [storedValue, setValue];
};

export default useLocalStorage;
