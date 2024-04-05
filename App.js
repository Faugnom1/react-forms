import React from 'react';
import BoxList from './BoxList';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <BoxList />
      <br></br>
      <TodoList />
    </div>
  );
}

export default App;
