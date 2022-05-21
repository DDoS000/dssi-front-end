import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const instance_AUTH = axios.create({
  baseURL: process.env.REACT_APP_AUTH_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const instance_Calendar = axios.create({
  baseURL: process.env.REACT_APP_CALENDAR_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const instance_Registry = axios.create({
  baseURL: process.env.REACT_APP_REGISTRY_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export {
  instance,
  instance_AUTH,
  instance_Calendar,
  instance_Registry
}