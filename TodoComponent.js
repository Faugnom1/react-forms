import React from 'react';

function TodoComponent({ id, task, removeTodo }) {
  return (
    <div>
      {task}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
}

export default TodoComponent;