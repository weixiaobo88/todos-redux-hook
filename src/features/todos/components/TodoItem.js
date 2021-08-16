import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { markTodo, deleteTodo, selectTodoById } from "../reducers/todosSlice";
import "../styles/todoItem.css";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  const dispatch = useDispatch();

  const onMark = () => {
    dispatch(markTodo(id));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(id));
  };

  let todoClass = todo.done ? "done" : "undone";

  return (
    <div className={`box ${todoClass}`} onClick={onMark}>
      {todo.text}
      <span className="times" onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string,
    done: PropTypes.bool,
  }),
  onMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoItem;
