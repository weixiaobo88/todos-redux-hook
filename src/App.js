import React from "react";
import "./App.css";
import {Route, Router} from "react-router";
import { createBrowserHistory } from "history";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";

const browserHistory = createBrowserHistory();

function App() {
  return (
      <React.Fragment>
          <header className="App-header">
              <p>Hello React!</p>
          </header>
          <Router history={browserHistory}>
              <Route exact path="/" component={TodoListContainer}/>
              <Route path="/done" component={DoneListContainer}/>
          </Router>
      </React.Fragment>
  );
}

export default App;
