<template>
  <TheHeader title="E-commerce do Mauricio" />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader },

  created() {
    this.$store.dispatch('products/fetchProducts')
  },
}
</script>
