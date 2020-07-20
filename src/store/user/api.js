import axios from "axios";

export const getUser = async userId => {
  const { data } = await axios.get(`user/${userId}`);

  return data;
};
