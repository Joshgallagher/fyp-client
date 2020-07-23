import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.CREATED_COMMENT](state, comment) {
    state.comments.unshift(comment);
  },
  [mutationTypes.SET_COMMENTS](state, comments) {
    state.comments = comments;
  }
};
