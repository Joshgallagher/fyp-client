import * as mutationTypes from "./mutationTypes";

import { getAll, getOne, getAllAuthors, remove } from "./api";

export const getArticles = async ({ commit }) => {
  const data = await getAll();

  commit(mutationTypes.SET_ARTICLES, data);
};

export const getArticle = async ({ commit }, slug) => {
  const data = await getOne(slug);

  commit(mutationTypes.SET_ARTICLE, data);

  return data;
};

export const getAuthorArticles = async ({ commit }, userId) => {
  const data = await getAllAuthors(userId);

  commit(mutationTypes.SET_ARTICLES, data);
};

export const deleteArticle = async ({ commit }, slug) => {
  await remove(slug);

  commit(mutationTypes.DELETED_ARTICLE, slug);
};
