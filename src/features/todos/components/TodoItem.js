import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { markTodo, deleteTodo, selectTodoById } from "../reducers/todosSlice";
import "../styles/todoItem.css";
import { updateTodoItem, deleteTodoItem } from "../../../apis/todosAPI";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  const dispatch = useDispatch();

  const onMark = () => {
    updateTodoItem(id, { id, text: todo.text, done: !todo.done }).then((response) => {
      dispatch(markTodo(response.data));
    });
  };

  const onDelete = (event) => {
    event.stopPropagation();

    deleteTodoItem(id).then(() => {
      dispatch(deleteTodo(id));
    });
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
