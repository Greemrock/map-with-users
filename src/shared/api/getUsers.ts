import axios from "axios";
import { originUrl } from "./";

export const getUsers = (token: string, page: number) => {
  return axios.get(`${originUrl}/api/get_all_people?page=${page}&page_len=3`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
