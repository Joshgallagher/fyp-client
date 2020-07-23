import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.CREATED_COMMENT](state, comment) {
    state.comments.unshift(comment);
  },
  [mutationTypes.SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
  [mutationTypes.DELETED_COMMENT](state, commentId) {
    state.comments = state.comments.filter(el => el.id !== commentId);
  }
};
