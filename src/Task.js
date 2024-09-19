import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
