import React, { useState } from 'react';
import '../App.css'

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Agregar tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
