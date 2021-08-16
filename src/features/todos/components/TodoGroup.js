import React from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { selectTodoIds } from "../reducers/todosSlice";
import "../styles/todoList.css";
  
const TodoGroup = () => {
  const todoIds = useSelector(selectTodoIds);

  return (
    <React.Fragment>
      <div className="todo-container">
        {todoIds.map((id) => (
          <TodoItem key={id} id={id} />
        ))}
      </div>
    </React.Fragment>
  );
};

TodoGroup.propTypes = {
  todoList: PropTypes.array,
  markTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodoGroup;
