import React from "react";
import { useSelector } from "react-redux";
import { selectTodoById } from "../reducers/todosSlice";
import "../styles/todoItem.css";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  return <div className={`box`}>{todo.text}</div>;
};

export default TodoItem;
