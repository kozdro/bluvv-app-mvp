import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/product/:productName',
    name: 'product-detail',
    component: ProductView,
    props: true,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmationView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

let isNavigatingWithinApp = false

router.beforeEach((_, from, next) => {
  if (from.name) {
    isNavigatingWithinApp = true
  } else {
    isNavigatingWithinApp = false
  }

  next()
})

export { isNavigatingWithinApp }
export default router
