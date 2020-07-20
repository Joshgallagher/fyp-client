import * as mutationTypes from "./mutationTypes";

import { getUser } from "./api";

export const getAuthorProfile = async ({ commit }, userId) => {
  const data = await getUser(userId);

  commit(mutationTypes.SET_AUTHOR, data);
};
