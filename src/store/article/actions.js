import * as mutationTypes from "./mutationTypes";

import { getAll, getOne } from "./api";

export const getArticles = async ({ commit }) => {
  const data = getAll();

  commit(mutationTypes.SET_ARTICLES, data);
};

export const getArticle = async ({ commit }, slug) => {
  const data = getOne(slug);

  commit(mutationTypes.SET_ARTICLE, data.data);
};
