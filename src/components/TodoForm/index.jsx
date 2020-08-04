import React, {Component} from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-container">
                <input onChange={this.handleChange} placeholder="input a new todo here..."
                       value={this.state.text}/>
                <input className='submit' type="submit" value="add"/>
            </form>
        );
    }
}

TodoForm.propTypes = {
    addTodo: PropTypes.func,
};

export default TodoForm;
