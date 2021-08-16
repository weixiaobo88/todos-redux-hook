import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
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
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const { selectIds: selectTodoIds, selectById: selectTodoById } =
  todosAdapter.getSelectors((state) => state.todoList);
