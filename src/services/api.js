import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.REACT_APP_AUTH_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fileapi = axios.create({
  baseURL:  process.env.REACT_APP_REGISTRY_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
