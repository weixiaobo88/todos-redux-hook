import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../reducers/todosSlice";
import { addNewTodo } from "../../../apis/todosAPI";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => setText(event.target.value);

  const addTodoItem = () => {
    addNewTodo(text).then((response) => {
      dispatch(addTodo(response.data));
    });
    setText("");
  };

  return (
    <div className="form-container">
      <input
        className={"item"}
        onChange={handleChange}
        placeholder="input a new todo here..."
        value={text}
      />
      <input
        className="submit"
        type="button"
        value="add"
        onClick={addTodoItem}
      />
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default TodoForm;
