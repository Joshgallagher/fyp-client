import axios from "axios";
import store from "@/store";

export const create = async (token, title, body) => {
  let response = null;

  try {
    response = await axios.post(
      "articles",
      { title, body },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (e) {
    return e;
  }

  return response;
};

export const getAll = async () => {
  const token = store.state.auth.access_token;
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  };
  const { data } = await axios.get(
    "articles",
    token !== null ? requestConfig : {}
  );

  return data;
};

export const getOne = async slug => {
  const { data } = await axios.get(`articles/${slug}`);

  return data;
};

export const getAllAuthors = async userId => {
  const { data } = await axios.get(`articles/user/${userId}`);

  return data;
};
