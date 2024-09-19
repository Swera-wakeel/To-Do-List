import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Work on project', category: 'Work', completed: false },
    { id: 2, name: 'Buy groceries', category: 'Personal', completed: false }
  ]);

  // Function to add a new task
  const addTask = (name, category) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      category,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle completion status of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>

        {/* Add Task Form */}
        <AddTaskForm addTask={addTask} />

        {/* Navigation Links */}
        <nav>
          <Link to="/">All</Link>
          <Link to="/work">Work</Link>
          <Link to="/personal">Personal</Link>
        </nav>

        {/* Routes for Task Categories */}
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path="/work"
            element={
              <TaskList
                tasks={tasks.filter((task) => task.category === 'Work')}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path="/personal"
            element={
              <TaskList
                tasks={tasks.filter((task) => task.category === 'Personal')}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
