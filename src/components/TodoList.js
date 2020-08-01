import React, {Component} from "react";
import PropTypes from "prop-types";
import Todo from "./Todo/Todo";
import "./Todo/Todo.css";
import TodoFormContainer from "../containers/TodoFormContainer";

class TodoList extends Component {
    render() {
        const {todoList} = this.props;
        return (
            <React.Fragment>
                <h2>TodoList</h2>
                <div className="todo-container">
                    {todoList.map((todo, index) => (
                        <Todo
                            key={todo.index}
                            index={index}
                            todo={todo}
                            onMarkDone={this.props.updateTodo}
                            onDelete={this.props.deleteTodo}
                        />
                    ))}
                </div>
                <TodoFormContainer/>
            </React.Fragment>
        );
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

export default TodoList;
