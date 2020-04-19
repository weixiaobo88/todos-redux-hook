import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    const { todo, onMarkDone } = this.props;
    onMarkDone(todo.index);
  }

  render() {
    const { todo } = this.props;
    let todoClass = todo.done ? "done" : "undone";

    return (
      <div className={`box ${todoClass}`} onClick={this.onClickDone}>
        {todo.value}
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    index: PropTypes.number,
    value: PropTypes.string,
    done: PropTypes.bool,
  }),
  onMarkDone: PropTypes.func,
};

export default Todo;
