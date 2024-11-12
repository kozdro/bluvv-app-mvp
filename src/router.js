import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductDetailPage from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import ProfileView from '@/views/ProfileView.vue'

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
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/product/:productName',
    name: 'product-detail',
    component: ProductDetailPage,
    props: true,
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
