import * as mutationTypes from "./mutationTypes";

import { getAll } from "./api";

export const getAllBookmarks = async ({ commit }) => {
  const data = await getAll();

  commit(mutationTypes.SET_BOOKMARKS, data);
};
