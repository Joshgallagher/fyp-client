import axios from "axios";
import store from "@/store";

export const getAll = async () => {
  const { data } = await axios.get(`bookmarks`, {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  });

  return data;
};
