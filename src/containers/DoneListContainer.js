import {connect} from 'react-redux'
import DoneList from "../components/DoneList";

const mapStateToProps = state => {
    console.log('state', state);
    return {doneList: state.todoList}
};

const DoneListContainer = connect(mapStateToProps, null)(DoneList);

export default DoneListContainer;
