<template>
  <nav>
    <router-link :to="{ name: 'dashboard-orders' }">Orders</router-link>
    <router-link :to="{ name: 'dashboard-profile' }">Profile</router-link>
  </nav>

  <router-view></router-view>
</template>
