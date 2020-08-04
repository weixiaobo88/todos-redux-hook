import React, {Component} from "react";
import PropTypes from "prop-types";
import "./DoneList.css";

class DoneList extends Component {
    render() {
        const {doneList} = this.props;
        return (
            <React.Fragment>
                <h2 className="done-header">Done List</h2>
                <ul className="done-container">
                    {doneList.map((todo, index) => (
                        <li key={index}>{todo.text}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

DoneList.propTypes = {
    doneList: PropTypes.array,
};

export default DoneList;
