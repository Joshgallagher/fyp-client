import * as mutationTypes from "./mutationTypes";

import { getAll, getOne, getAllAuthors } from "./api";

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
