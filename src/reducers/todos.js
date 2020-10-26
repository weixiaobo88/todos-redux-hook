import {ADD_TODO, DELETE_TODO, MARK_TODO} from "../actions";
import { v4 as uuidv4 } from 'uuid'

const todoList = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: uuidv4(), text: action.text, done: false}];
        case MARK_TODO:
            return state.map((todo) => {
                return todo.id === action.id ? {id: todo.id, text: todo.text, done: !todo.done} : todo;
            });
        case DELETE_TODO:
            return state.filter((todo) => action.id !== todo.id);
        default:
            return state;
    }
};

export default todoList;
