import React from "react";
import PropTypes from "prop-types";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";
import "../styles/todoList.css";

const TodoList = () => {
  return (
    <React.Fragment>
      <h2 className="todo-header">TodoList</h2>
      <TodoGroup />
      <TodoForm />
    </React.Fragment>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  markTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodoList;
