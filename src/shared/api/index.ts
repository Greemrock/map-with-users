import { getUsers } from "./getUsers";
import { login } from "./login";

export const originUrl = `${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_PORT}`;

export const api = {
  login,
  getUsers,
};
