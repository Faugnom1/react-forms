import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoComponent from './TodoComponent';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm createTodo={addTodo} />
      {todos.map(todo => (
        <TodoComponent key={todo.id} id={todo.id} task={todo.task} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;