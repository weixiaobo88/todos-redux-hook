import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import "./Todo.css";

class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <React.Fragment>
        <h2>TodoList</h2>
        <div className="todo-container">
          {todoList.map((todo, index) => (
            <Todo
              key={todo.index}
              index={index}
              todo={todo}
              onMarkDone={this.props.onMarkDone}
              onDelete={this.props.onDelete}
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
  onDelete: PropTypes.func,
};

export default TodoList;
