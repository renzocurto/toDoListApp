import React, { useState } from 'react';

function TodoItem({ task, index, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText !== task.text) {
      editTask(index, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
        />
      ) : (
        <span onClick={() => toggleTask(index)}>{task.text}</span>
      )}
      <button onClick={() => deleteTask(index)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default TodoItem;
