export default {
  namespaced: true,

  state: {
    isLoggedIn: false,
    currentUser: '',
  },

  mutations: {
    setUser(state, payload) {
      state.isLoggedIn = true
      state.currentUser = payload.username
    },

    clearUser(state) {
      state.isLoggedIn = false
    },
  },

  actions: {
    login(context, payload) {
      context.commit('setUser', payload)
    },

    logout(context) {
      context.commit('clearUser')
    },
  },

  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn
    },

    getUserName(state) {
      return state.currentUser
    },
  },
}
