import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.SET_BOOKMARKS](state, bookmarks) {
    state.bookmarks = bookmarks;
  }
};
