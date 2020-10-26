import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends Component {
  markTodo = () => {
    const { todo, onMark } = this.props;
    onMark(todo.id);
  };

  deleteTodo = (event) => {
    event.stopPropagation();
    const { onDelete, todo } = this.props;
    onDelete(todo.id);
  };

  render() {
    const { todo } = this.props;
    let todoClass = todo.done ? "done" : "undone";

    return (
      <div className={`box ${todoClass}`} onClick={this.markTodo}>
        {todo.text}
        <span className="times" onClick={this.deleteTodo}>&times;</span>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string,
    done: PropTypes.bool,
  }),
  onMark: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Todo;
