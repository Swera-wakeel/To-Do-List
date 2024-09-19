import React, { useState } from 'react';
import './App.css';
const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    addTask(taskName, category);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Add new task" 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
