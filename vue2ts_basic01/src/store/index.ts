import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import GitSearchStore from "./modules/GitSearchStore";

// export const store = new Vuex.Store({
export default new Vuex.Store({
  modules: {
    GitSearchStore,
  },
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {},
});
