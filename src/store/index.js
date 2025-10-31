import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/products'

const store = createStore({
  modules: {
    auth,
    products,
  },
})

export default store
