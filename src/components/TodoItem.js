import React from 'react';
import '../App.css'


function TodoItem({ task, index, deleteTask, toggleTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : '' }}>
      <span onClick={() => toggleTask(index)}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
