import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    totalPrice: 0
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload);
    },
    removeItem(state, payload) {
      state.items = state.items.filter(item => item !== payload);
    }
  },
  actions: {
    addItem(state, payload) {
      state.commit("addItem", payload);
    },
    removeItem(state, payload) {
      state.commit("removeItem", payload);
    }
  },
  modules: {},
  getters: {
    items(state) {
      return state.items;
    },
    price(state) {
      return state.totalPrice;
    }
  }
});
