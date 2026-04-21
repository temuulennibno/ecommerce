import axios from "axios";

export const myAxios = axios.create({
  baseURL: "https://dummyjson.com",
});
