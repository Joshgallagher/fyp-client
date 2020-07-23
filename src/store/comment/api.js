import axios from "axios";
import store from "@/store";

export const create = async (articleId, comment) => {
  let response = null;

  try {
    response = await axios.post(
      "comments",
      { articleId, comment },
      { headers: { Authorization: `Bearer ${store.state.auth.access_token}` } }
    );
  } catch (e) {
    return e;
  }

  return response;
};

export const getAll = async articleId => {
  const { data } = await axios.get(`comments/article/${articleId}`);

  return data;
};

export const update = async (commentId, comment) => {
  let response = null;

  try {
    response = await axios.put(
      `comments/${commentId}`,
      { comment },
      { headers: { Authorization: `Bearer ${store.state.auth.access_token}` } }
    );
  } catch (e) {
    return e;
  }

  return response;
};

export const remove = async commentId => {
  let response = null;

  try {
    response = await axios.delete(`comments/${commentId}`, {
      headers: { Authorization: `Bearer ${store.state.auth.access_token}` }
    });
  } catch (e) {
    return e;
  }

  return response;
};
