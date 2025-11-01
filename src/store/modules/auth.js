export default {
  namespaced: true,

  state: {
    isLoggedIn: true,
    currentUser: '',
  },

  mutations: {
    setUser(state) {
      state.isLoggedIn = true
    },
    clearUser(state) {
      state.isLoggedIn = false
    },
  },

  actions: {
    login(context) {
      setTimeout(() => {
        context.commit('setUser')
      }, 2000)
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
