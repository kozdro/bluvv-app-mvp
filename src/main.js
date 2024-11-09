import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createDeviceDetector } from 'next-vue-device-detector'

const device = createDeviceDetector()

createApp(App)
  .use(router)
  .use(device)
  .mount('#app')
