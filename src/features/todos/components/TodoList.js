import React from "react";
import PropTypes from "prop-types";
import TodoGroup from "./TodoGroup";
import "../styles/todoList.css";

const TodoList = () => {
  return (
    <React.Fragment>
      <h2 className="todo-header">TodoList</h2>
      <TodoGroup />
    </React.Fragment>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  markTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodoList;
