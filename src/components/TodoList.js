import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <React.Fragment>
        <h2>TodoList</h2>
        <div className="container">
          {todoList.map((todo) => (
            <Todo key={todo.index} todo={todo} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf([
    {
      value: PropTypes.string,
    },
  ]),
};

export default TodoList;