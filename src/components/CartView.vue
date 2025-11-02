<template>
  <ul>
    <li v-for="product in cartFull" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <hr />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ['cartFull', 'cartItemsCount', 'cartTotalPrice']),
  },
}
</script>
