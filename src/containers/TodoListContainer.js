import {connect} from 'react-redux'
import TodoList from "../components/TodoList";
import {deleteTodo, markTodo} from "../actions";

const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (index) => {
        dispatch(deleteTodo(index))
    },
    markTodo: (index) => {
        dispatch(markTodo(index))
    }
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
