import axios from "axios";
import store from "@/store";

export const create = async slug => {
  const { data } = await axios.post(
    `bookmarks`,
    { articleSlug: slug },
    {
      headers: {
        Authorization: `Bearer ${store.state.auth.access_token}`
      }
    }
  );

  return data;
};

export const getAll = async () => {
  const { data } = await axios.get(`bookmarks`, {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  });

  return data;
};

export const remove = async slug => {
  const { data } = await axios.delete(`bookmarks/${slug}`, {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  });

  return data;
};
