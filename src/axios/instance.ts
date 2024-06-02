import axios from "axios";

export const instance = axios.create({
  baseURL: "/api",
});

export const getToken = () => {
  const token = window.localStorage.getItem("access_token");
  if (token) return `Bearer ${token}`;
};
