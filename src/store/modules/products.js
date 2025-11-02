const mockData = [
  {
    id: 'p1',
    name: 'Livro "Desvendando Vue 3"',
    price: 95,
  },
  {
    id: 'p2',
    name: 'Caneca Programador (Código Fonte)',
    price: 45,
  },
  {
    id: 'p3',
    name: 'Adesivo Vue.js (Pack com 5)',
    price: 20,
  },
  {
    id: 'p4',
    name: 'Camiseta "It works on my machine"',
    price: 70,
  },
]

export default {
  namespaced: true,

  state: {
    isLoading: false,
    allProducts: [],
  },

  mutations: {
    setProducts(state, payload) {
      state.allProducts = payload
    },

    setLoading(state, status) {
      state.isLoading = status
    },
  },

  actions: {
    fetchProducts(context) {
      context.commit('setLoading', true)
      setTimeout(() => {
        const products = mockData
        context.commit('setProducts', products)
        context.commit('setLoading', false)
      }, 500)
    },
  },

  getters: {
    getAllProducts(state) {
      return state.allProducts
    },

    getProductById(state) {
      return (productId) => state.allProducts.find((p) => p.id === productId)
    },
  },
}
