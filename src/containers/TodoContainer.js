import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";

class TodoContainer extends Component {
  render() {
    return (
      <div>
        TodoContainer
        <TodoList />
      </div>
    );
  }
}

TodoContainer.propTypes = {};

export default TodoContainer;
