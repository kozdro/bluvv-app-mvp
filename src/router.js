import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ShopView from './views/ShopView.vue'
import CartView from './views/CartView.vue'
import ProfileView from './views/ProfileView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/shop', component: ShopView },
  { path: '/cart', component: CartView },
  { path: '/profile', component: ProfileView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
