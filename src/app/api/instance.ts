import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://spaces.nexudus.com/api/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
