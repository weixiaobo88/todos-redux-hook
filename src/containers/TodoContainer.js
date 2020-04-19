import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";
import { INIT_TODOS } from "../constants/constants";
import update from "immutability-helper";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkDone = this.onMarkDone.bind(this);

    this.state = {
      todoList: INIT_TODOS,
    };
  }

  onMarkDone(index) {
    const { todoList } = this.state;
    const todo = todoList[index];
    const updatedTodoList = update(todoList, {
      [index]: { $merge: { done: !todo.done } },
    });

    this.setState({
      todoList: updatedTodoList,
    });
  }

  render() {
    return (
      <div>
        TodoContainer
        <TodoList todoList={this.state.todoList} onMarkDone={this.onMarkDone} />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  onMarkDone: PropTypes.func,
};

export default TodoContainer;
