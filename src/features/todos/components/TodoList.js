import React from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { selectTodoIds } from "../reducers/todosSlice";
import "../styles/todoList.css";

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds);

  return (
    <React.Fragment>
      <h2 className="todo-header">TodoList</h2>
      <div className="todo-container">
        {todoIds.map((id) => (
          <Todo key={id} id={id} />
        ))}
      </div>
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
