<template>
  <form @submit.prevent="login">
    <label for="username">username: </label>
    <input id="username" type="text" v-model="userName" />
    <label for="password">password: </label>
    <input id="password" type="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },

  methods: {
    login() {
      this.$store.dispatch('auth/login')
      this.$router.push({ name: 'dashboard' })
    },
  },
}
</script>
