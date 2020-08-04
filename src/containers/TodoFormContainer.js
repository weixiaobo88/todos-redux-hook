import {connect} from 'react-redux'
import TodoForm from "../components/TodoForm";
import {addTodo} from "../actions";

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => {
        dispatch(addTodo(text))
    }
});

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
