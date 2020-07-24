import axios from "axios";
import store from "@/store";

export const create = async (title, subtitle, body) => {
  let response = null;

  try {
    response = await axios.post(
      "articles",
      { title, subtitle, body },
      { headers: { Authorization: `Bearer ${store.state.auth.access_token}` } }
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
  const token = store.state.auth.access_token;
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  };
  const { data } = await axios.get(
    `articles/${slug}`,
    token !== null ? requestConfig : {}
  );

  return data;
};

export const getAllAuthors = async userId => {
  const token = store.state.auth.access_token;
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${store.state.auth.access_token}`
    }
  };
  const { data } = await axios.get(
    `articles/user/${userId}`,
    token !== null ? requestConfig : {}
  );

  return data;
};

export const remove = async slug => {
  let response = null;

  try {
    response = await axios.delete(`articles/${slug}`, {
      headers: { Authorization: `Bearer ${store.state.auth.access_token}` }
    });
  } catch (e) {
    return e;
  }

  return response;
};
