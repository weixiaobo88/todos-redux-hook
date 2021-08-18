import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { selectTodoIds, getAllTodos } from "../reducers/todosSlice";
import { getTodoList } from "../../../apis/todosAPI";
import "../styles/todoList.css";

const TodoGroup = () => {
  const todoIds = useSelector(selectTodoIds);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodoList().then((response) => {
      dispatch(getAllTodos(response.data));
    });
  }, [dispatch]);

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
