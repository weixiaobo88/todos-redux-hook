import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TodoList from "./features/todos/components/TodoList";
import DoneList from "./features/todos/components/DoneList";
import NotFoundPage from "./features/notfound/NotFoundPage";
import "./features/todos/styles/app.css";
import "antd/dist/antd.css";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/"> All Todo List Page</Link>
          </li>
          <li>
            <Link to="/done"> Done Todo List Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
