export default {
  namespaced: true,

  state: {
    isLoading: false,
    allProducts: [
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
      {
        id: 'p5',
        name: 'Mousepad Ergonômico Dev',
        price: 65,
      },
    ],
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
    getProductById(state) {
      return (productId) => state.allProducts.find((p) => p.id === productId)
    },
  },
}
