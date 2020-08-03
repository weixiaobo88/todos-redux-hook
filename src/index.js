import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import reducer from "./reducers";
import { Router, Route } from 'react-router';
import { createBrowserHistory } from "history";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";

const browserHistory = createBrowserHistory();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
