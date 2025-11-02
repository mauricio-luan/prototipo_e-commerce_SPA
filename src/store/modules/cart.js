export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    pushProductToCart(state, productId) {
      state.items.push(productId)
    },

    clearCart(state) {
      state.items = []
    },
  },

  actions: {
    addProductToCart(context, payload) {
      const isLogged = context.rootGetters['auth/isAuthenticated']
      if (isLogged) context.commit('pushProductToCart', payload)
    },
  },

  getters: {
    cartItemsCount(state) {
      return state.items.length
    },

    cartFull(state, _, __, rootGetters) {
      const allProducts = rootGetters['products/getAllProducts']
      return state.items.map((productId) => {
        return allProducts.find((p) => p.id === productId)
      })
    },

    cartTotalPrice(state, _, __, rootGetters) {
      const allProducts = rootGetters['products/getAllProducts']
      return state.items.reduce((total, productId) => {
        const product = allProducts.find((p) => p.id === productId)
        if (product) {
          return total + product.price
        }
        return total
      }, 0)
    },
  },
}
