import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-e21q.onrender.com"
})