import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo(state, action) {
      todosAdapter.addOne(state, action.payload);
    },
    markTodo(state, action) {
      todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    deleteTodo(state, action) {
      todosAdapter.removeOne(state, action.payload);
    },
    getAllTodos(state, action) {
      todosAdapter.setAll(state, action.payload);
    },
    updateTodoText(state, action) {
      todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
  },
});

export const { addTodo, markTodo, deleteTodo, getAllTodos, updateTodoText } =
  todosSlice.actions;

export default todosSlice.reducer;

export const {
  selectAll: selectTodos,
  selectIds: selectTodoIds,
  selectById: selectTodoById,
} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.done)
);
