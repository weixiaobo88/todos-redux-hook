import React, {Component} from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    };

    addTodoItem = () => {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <div className="form-container">
                <input className={"item"} onChange={this.handleChange} placeholder="input a new todo here..."
                       value={this.state.text}/>
                <input className='submit' type="button" value="add" onClick={this.addTodoItem}/>
            </div>
        );
    }
}

TodoForm.propTypes = {
    addTodo: PropTypes.func,
};

export default TodoForm;
