import React, { useState } from 'react';

// TaskList component to display tasks in a specific column
const TaskList = ({ title, tasks, editTask, deleteTask, toggleTaskStatus, handleDragEnd }) => {
  const [isSorted, setIsSorted] = useState(false); // State to track if the tasks should be sorted
  const [editingTask, setEditingTask] = useState(null); // State to track the task being edited
  const [taskName, setTaskName] = useState(''); // State to store the current task name being edited
  const [taskDueDate, setTaskDueDate] = useState(''); // State to store the current task due date being edited

  // Sort tasks by name if isSorted is true, otherwise use the original order
  const sortedTasks = isSorted ? [...tasks].sort((a, b) => a.name.localeCompare(b.name)) : tasks;

  // Allow dragging over the task list container
  const onDragOver = (event) => {
    event.preventDefault();
  };

  // Handle dropping a task onto the task list container
  const onDrop = (event, newStatus) => {
    const taskId = event.dataTransfer.getData("taskId");
    handleDragEnd(event, parseInt(taskId), newStatus);
  };

  // Start editing a task
  const handleEditClick = (task) => {
    setEditingTask(task.id);
    setTaskName(task.name);
    setTaskDueDate(task.dueDate);
  };

  // Save the edited task
  const handleEditSave = (id) => {
    editTask({ id, name: taskName, dueDate: taskDueDate, status: tasks.find(task => task.id === id).status });
    setEditingTask(null);
    setTaskName('');
    setTaskDueDate('');
  };

  return (
    <div className="task-list" onDragOver={onDragOver} onDrop={(event) => onDrop(event, title.toLowerCase())}>
      <h2>{title}</h2>
      {/* Button to toggle sorting of tasks */}
      <button onClick={() => setIsSorted(!isSorted)}>Sort by Name</button>
      {/* Render each task */}
      {sortedTasks.map(task => (
        <div key={task.id} className={`task-item ${task.status}`} draggable onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}>
          {editingTask === task.id ? (
            <div>
              {/* Edit task form */}
              <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
              <input type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
              <button onClick={() => handleEditSave(task.id)}>Save</button>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              {/* Display task details */}
              <input type="checkbox" checked={task.status === 'completed'} onChange={() => toggleTaskStatus(task.id)} />
              <span>{task.name}</span>
              <span className="task-date">{task.dueDate}</span>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
