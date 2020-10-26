import React, {Component} from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";
import "./TodoList.css";
import TodoFormContainer from "../../containers/TodoFormContainer";

class TodoList extends Component {
    render() {
        const {todoList} = this.props;
        return (
            <React.Fragment>
                <h2 className="todo-header">TodoList</h2>
                <div className="todo-container">
                    {todoList.map((todo, index) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            onMark={this.props.markTodo}
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
    markTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

export default TodoList;
