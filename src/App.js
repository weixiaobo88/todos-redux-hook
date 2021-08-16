import React from "react";
import TodoList from "./features/todos/components/TodoList";
import DoneList from "./features/todos/components/DoneList";
import NotFoundPage from "./features/notfound/NotFoundPage";
import "./features/todos/styles/app.css";
import {
  Route,
  Link,
  HashRouter,
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>Hello React!</p>
      </header>
      {/*<HashRouter>*/}
      {/*    <ul>*/}
      {/*        <li><Link to="/">go to list page</Link></li>*/}
      {/*        <li><Link to="/done">go to done page</Link></li>*/}
      {/*    </ul>*/}
      {/*    <Route exact path="/" component={TodoListContainer}/>*/}
      {/*    <Route path="/done" component={DoneListContainer}/>*/}
      {/*</HashRouter>*/}
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/"> go to list page </Link>
          </li>
          <li>
            <Link to="/done"> go to done page </Link>
          </li>
        </ul> */}
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
