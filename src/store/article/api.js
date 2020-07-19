import axios from "axios";

export const create = async (token, title, body) => {
  let response = null;

  try {
    response = await axios.post(
      "articles",
      { title, body },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (e) {
    return e;
  }

  return response;
};

export const getAll = async () => {
  const { data } = await axios.get("articles");

  return data;
};

export const getOne = async slug => {
  const { data } = await axios.get(`articles/${slug}`);

  return data;
};
