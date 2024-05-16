import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: "application/json;version=v1_web",
    "Content-Type": "application/json",
  },
});

export { api };
