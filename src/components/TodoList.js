import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
