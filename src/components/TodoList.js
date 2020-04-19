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
            <Todo
              key={todo.index}
              todo={todo}
              onMarkDone={this.props.onMarkDone}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onMarkDone: PropTypes.func,
};

export default TodoList;
