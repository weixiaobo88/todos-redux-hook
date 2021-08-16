import React, { useState } from "react";
import PropTypes from "prop-types";
import { addTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => setText(event.target.value);

  const addTodoItem = () => {
    dispatch(addTodo(text));
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
