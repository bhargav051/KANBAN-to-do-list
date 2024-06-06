import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() function removes blank spaces from the begining and end of the string
    if (taskName.trim() && dueDate) {
      const newTask = {
        // Date.now() returns the number of milliseconds since January 1, 1970
        id: Date.now(),
        name: taskName,
        dueDate,
        status: 'todo'
      };
      addTask(newTask);
      setTaskName('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
