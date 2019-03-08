import React, { Component } from 'react';
import './App.css';
import TodoList from './Todo/TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>📝 Todo-list</h1>
        <p>Ajoutez simplement un tâche à votre liste. ⬇️</p>
        <br/>
        <div className="App">
         <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
