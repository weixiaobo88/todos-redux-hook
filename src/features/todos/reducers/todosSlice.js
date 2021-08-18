import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosAdapter = createEntityAdapter();

const todoExampleId = uuidv4();
const initialState = todosAdapter.getInitialState({
  ids: [todoExampleId],
  entities: {
    [todoExampleId]: {
      id: todoExampleId,
      text: "todo example",
      done: false,
    },
  },
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      todosAdapter.addOne(state, {
        id: uuidv4(),
        text: action.payload,
        done: false,
      });
    },
    markTodo(state, action) {
      const todo = state.entities[action.payload];
      todo.done = !todo.done;
    },
    deleteTodo(state, action) {
      todosAdapter.removeOne(state, action.payload);
    },
    getAllTodos(state, action) {
      todosAdapter.setAll(state, action.payload);
    },
  },
});

export const { addTodo, markTodo, deleteTodo, getAllTodos } =
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
