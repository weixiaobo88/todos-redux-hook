import React from "react";
import "./App.css";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
