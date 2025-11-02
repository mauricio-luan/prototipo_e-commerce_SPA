<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <router-link :to="{ name: 'home' }">Home </router-link>
      <router-link :to="{ name: 'login' }">Login </router-link>
      <router-link :to="{ name: 'cart' }">Carrinho </router-link>
      <router-link :to="{ name: 'dashboard' }">Dashboard </router-link>
      <div>Bem vindo, @{{ getUserName }} | Carrinho: {{ cartItemsCount }}</div>
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
