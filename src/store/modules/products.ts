/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    totalProducts: (state: { products: string | any[] }) =>
      state.products.length,
  },
  mutations: {
    addProduct(state: { products: any[] }, product: any) {
      state.products.push(product);
    },
    removeProduct(state: { products: any[] }, productId: any) {
      state.products = state.products.filter(
        (product: { id: any }) => product.id !== productId
      );
    },
  },
  actions: {
    async fetchProducts({ commit }: any) {
      const response = await fetch("https://api.example.com/products");
      const data = await response.json();
      commit("addProducts", data);
    },
  },
};
