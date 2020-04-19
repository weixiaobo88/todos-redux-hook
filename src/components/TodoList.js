import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        TodoList
        <Todo />
      </div>
    );
  }
}

TodoList.propTypes = {

};

export default TodoList;