import axios from "axios";
import { originUrl } from "./";

export const login = (username: string, password: string) => {
  return axios.get(`${originUrl}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: username,
      password: password,
    },
  });
};
