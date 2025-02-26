import React from 'react';
import TodoItem from './TodoItem';
import '../App.css'


function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
