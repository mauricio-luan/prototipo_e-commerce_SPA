<template>
  <ul>
    <li v-for="product in getAllProducts" :key="product.id">
      <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
        {{ product.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', ['getAllProducts']),
  },
}
</script>
