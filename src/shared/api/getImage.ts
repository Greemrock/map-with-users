import axios from "axios";
import { originUrl } from "./index";

export const getImage = (token: string, url: string) => {
  return axios.get(`${originUrl}${url}`, {
    headers: {
      Authorization: token,
      "Content-type": "image/jpg",
    },
    responseType: "blob",
  });
};
