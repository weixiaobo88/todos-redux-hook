import api from "./api";

export const getTodoList = () => {
  return api.get("/todos");
};

export const addNewTodo = (text) => {
  return api.post("/todos", { text });
};

export const updateTodoItem = (id, doneItem) => {
  return api.put(`/todos/${id}`, doneItem);
};

export const deleteTodoItem = (id) => {
  return api.delete(`/todos/${id}`);
};
