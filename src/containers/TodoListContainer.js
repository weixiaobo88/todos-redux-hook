import {connect} from 'react-redux'
import {deleteTodo, markTodo} from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => {
        dispatch(deleteTodo(id))
    },
    markTodo: (id) => {
        dispatch(markTodo(id))
    }
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
