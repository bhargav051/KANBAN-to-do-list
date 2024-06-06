import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';

const App = () => {
  // Use custom hook to manage tasks state with localStorage
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to edit an existing task
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  // Function to delete a task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to toggle the status of a task between 'completed' and 'todo'
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'completed' ? 'todo' : 'completed' } : task));
  };

  // Function to clear all tasks with status 'completed'
  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => task.status !== 'completed'));
  };

  // Function to handle drag and drop to change task status
  const handleDragEnd = (event, taskId, newStatus) => {
    event.preventDefault();
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <input 
        type="text" 
        placeholder="Search tasks by name..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        className="search-bar"
      />
      <TaskForm addTask={addTask} />
      <div className="kanban-board">
        <TaskList title="todo" tasks={filteredTasks.filter(task => task.status === 'todo')} editTask={editTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} handleDragEnd={handleDragEnd} />
        <TaskList title="Ongoing" tasks={filteredTasks.filter(task => task.status === 'ongoing')} editTask={editTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} handleDragEnd={handleDragEnd} />
        <TaskList title="Completed" tasks={filteredTasks.filter(task => task.status === 'completed')} editTask={editTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} handleDragEnd={handleDragEnd} />
      </div>
      <button className="clear-completed" onClick={clearCompletedTasks}>Clear Completed Tasks</button>
    </div>
  );
};

export default App;
