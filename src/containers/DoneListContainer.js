import {connect} from 'react-redux'
import DoneList from "../components/DoneList";

const mapStateToProps = state => {
    return {doneList: state.todoList.filter(todo => todo.done)}
};

const DoneListContainer = connect(mapStateToProps, null)(DoneList);

export default DoneListContainer;
