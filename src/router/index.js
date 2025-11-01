import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

import ProductList from '@/components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductList,
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: () => import('@/components/ProductDetail.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/CartView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/components/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'profile',
          name: 'dashboard-profile',
          component: () => import('@/components/UserProfile.vue'),
        },
        {
          path: 'orders',
          name: 'dashboard-orders',
          component: () => import('@/components/UserOrders.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isLogged = store.getters['auth/isAuthenticated']

  if (to.meta.requiresAuth && !isLogged) {
    next({ name: 'login' })
  } else if (to.name === 'login' && isLogged) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
