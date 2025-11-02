<template>
  <div>
    <p>{{ product.id }}</p>
    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="addToCart(product.id)">Add cart</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.productId = this.$route.params.id
  },

  data() {
    return {
      productId: '',
    }
  },

  computed: {
    ...mapGetters('products', ['getProductById']),

    product() {
      return this.getProductById(this.productId)
    },
  },

  methods: {
    addToCart(productId) {
      const isLogged = this.$store.getters['auth/isAuthenticated']
      if (!isLogged) {
        this.$router.push({ name: 'login' })
      } else {
        this.$store.dispatch('cart/addProductToCart', productId)
      }
    },
  },
}
</script>
