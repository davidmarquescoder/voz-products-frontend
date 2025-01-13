import { createRouter, createWebHistory } from 'vue-router'

// Pages Views
import IndexPage from '@/pages/IndexPage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import CategoryDetailsPage from '@/pages/modules/CategoryDetailsPage.vue'
import ProductDetailsPage from '@/pages/modules/ProductDetailsPage.vue'

// Middlewares
import authGuard from '@/middlewares/auth'
import guestGuard from '@/middlewares/guest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage,
      beforeEnter: authGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      beforeEnter: guestGuard
    },
    {
      path: '/category/details/:id',
      name: 'CategoryDetails',
      component: CategoryDetailsPage,
      beforeEnter: authGuard
    },
    {
      path: '/product/details/:id',
      name: 'ProductDetails',
      component: ProductDetailsPage,
      beforeEnter: authGuard
    },
  ],
})

export default router
