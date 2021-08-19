import axios from "axios";

const api = axios.create({
  // baseURL: "https://5fd06b911f23740016631881.mockapi.io/api/",
  baseURL: "http://localhost:8080",
});

export default api;
