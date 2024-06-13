import { createStore } from "vuex";
import products from "./modules/products";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
  },
  modules: {
    products,
  },
});
