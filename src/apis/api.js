import axios from "axios";
import { config } from "../config";

const api = axios.create({
  baseURL: config.url.API_URL,
});

console.log(config.url.API_URL);

export default api;
