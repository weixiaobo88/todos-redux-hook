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

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index
    }
};

export const markTodo = index => {
    return {
        type: MARK_TODO,
        index
    }
};
