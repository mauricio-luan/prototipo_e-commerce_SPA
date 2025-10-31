export default {
  namespaced: true,

  state: {
    allProducts: [],
    isLoading: false,
  },

  mutations: {
    setProducts(state, payload) {
      state.allProducts.push(payload)
    },
    setLoading(state, status) {
      state.isLoading = status
    },
  },

  actions: {
    fetchProducts(context, payload) {
      setTimeout(() => {
        context.commit('setLoading', true)
        context.commit('setProducts', payload)
      }, 2000)
      context.commit('setLoading', false)
    },
  },

  getters: {
    getAllProducts(state) {
      return state.allProducts
    },
    getProductById(state, productId) {
      return state.allProducts.find((p) => p.id === productId)
    },
  },
}
