import axios from "axios";

const api = axios.create({
  baseURL: `https://api.github.com`,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.common["Authorization"] = import.meta.env.VITE_TOKEN_GIT;

export default api;