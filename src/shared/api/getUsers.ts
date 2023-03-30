import axios from "axios";
import { UserType } from "shared/types";
import { originUrl } from "./";

export const getUsers = (token: string, page: number, postsPerPage: number) => {
  return axios.get(
    `${originUrl}/api/get_all_people?page=${page}&page_len=${postsPerPage}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};
