export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_TODO = 'MARK_TODO';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text,
        done: false
    }
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
};

export const markTodo = id => {
    return {
        type: MARK_TODO,
        id
    }
};
