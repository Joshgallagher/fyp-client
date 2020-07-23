import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [mutationTypes.SET_ARTICLE](state, article) {
    state.article = article;
  },
  [mutationTypes.DELETED_ARTICLE](state, slug) {
    state.articles = state.articles.filter(el => el.slug !== slug);
  }
};
