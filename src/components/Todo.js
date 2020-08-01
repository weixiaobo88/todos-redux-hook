import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  onClickDone() {
    const { index, onMarkDone } = this.props;
    onMarkDone(index);
  }

  onClickDelete(event) {
    event.stopPropagation();
    const { onDelete, index } = this.props;
    onDelete(index);
  }

  render() {
    const { todo } = this.props;
    let todoClass = todo.done ? "done" : "undone";

    return (
      <div className={`box ${todoClass}`} onClick={this.onClickDone}>
        {todo.value}
        <span className="times" onClick={this.onClickDelete}>&times;</span>
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
  onDelete: PropTypes.func,
};

export default Todo;
