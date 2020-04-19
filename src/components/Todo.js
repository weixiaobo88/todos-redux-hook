import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends Component {
  render() {
    return <div className="box">{this.props.todo.value}</div>;
  }
}

Todo.propTypes = {
  todo: PropTypes.objectOf({
    value: PropTypes.string,
  }),
};

export default Todo;