import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm/TodoForm";

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => {
        dispatch({type: 'ADD_TODO', text})
    }
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
