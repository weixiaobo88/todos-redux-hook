import React from "react";
import TodoList from "./features/todos/components/TodoList";
import "./features/todos/styles/app.css";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      <TodoList />
     
    </React.Fragment>
  );
}

export default App;
