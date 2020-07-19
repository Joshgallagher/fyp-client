import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [mutationTypes.SET_ARTICLE](state, article) {
    state.article = article;
  }
};
