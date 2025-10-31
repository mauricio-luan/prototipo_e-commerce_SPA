<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <p>Bem vindo, @{{ getUserName }}</p>
      <p>Carrinho: {{ cartItemsCount }}</p>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['title'],
  computed: {
    ...mapGetters('auth', ['getUserName']),
    ...mapGetters('cart', ['cartItemsCount']),
  },
}
</script>
