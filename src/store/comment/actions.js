import * as mutationTypes from "./mutationTypes";
import { create, getAll, remove } from "./api";
import store from "@/store";

export const createComment = async ({ commit }, { articleId, comment }) => {
  const { name, sub } = store.state.auth.user;

  const data = await create(articleId, comment);

  commit(mutationTypes.CREATED_COMMENT, {
    ...data.data,
    comment,
    name,
    userId: sub
  });
};

export const getComments = async ({ commit }, articleId) => {
  const data = await getAll(articleId);

  commit(mutationTypes.SET_COMMENTS, data);
};

export const deleteComment = async ({ commit }, commentId) => {
  await remove(commentId);

  commit(mutationTypes.DELETED_COMMENT, commentId);
};
