import React, { Component } from "react";
import TodoList from "../components/TodoList";
import { INIT_TODOS } from "../constants/constants";

class TodoContainer extends Component {
  render() {
    const todoList = INIT_TODOS;

    return (
      <div>
        TodoContainer
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

TodoContainer.propTypes = {};

export default TodoContainer;
