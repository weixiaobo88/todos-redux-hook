import React from "react";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      <TodoListContainer />
    </div>
  );
}

export default App;
