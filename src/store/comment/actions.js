import * as mutationTypes from "./mutationTypes";

import { create, getAll } from "./api";

export const createComment = async ({ commit }, { articleId, comment }) => {
  const data = await create(articleId, comment);

  commit(mutationTypes.CREATED_COMMENT, { ...data.data, comment });
};

export const getComments = async ({ commit }, articleId) => {
  const data = await getAll(articleId);

  commit(mutationTypes.SET_COMMENTS, data);
};
