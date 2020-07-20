import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.SET_AUTHOR](state, author) {
    state.author = author;
  }
};
