import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markTodo, selectTodoById } from "../reducers/todosSlice";
import "../styles/todoItem.css";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  const dispatch = useDispatch();

  const onMark = () => {
    dispatch(markTodo(id));
  };

  let todoClass = todo.done ? "done" : "undone";

  return (
    <div className={`box ${todoClass}`} onClick={onMark}>
      {todo.text}
    </div>
  );
};

export default TodoItem;
