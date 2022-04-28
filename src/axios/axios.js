import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});
