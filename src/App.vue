<template>
  <template v-if="isAuthenticated">
    <template v-if="device.mobile">
      <main class="mb-16 box-border">
        <RouterView />
      </main>
      
      <NavBar />
    </template>
  
    <div v-else class="h-screen w-full flex items-center justify-center">
      <h1 v-text="'Please use mobile device.'" />
    </div>
  </template>

  <div v-else class="w-full h-screen flex items-center justify-center text-center text-2xl" v-text="'Please refresh the page.'" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDevice } from 'next-vue-device-detector'

import NavBar from '@/components/NavBar.vue'

const device = useDevice()

const isAuthenticated = ref(false)

const authenticateUser = () => {
  const username = prompt('Enter your username:')
  const password = prompt('Enter your password:')

  if (username === process.env.VUE_APP_AUTH_USERNAME && password === process.env.VUE_APP_AUTH_PASSWORD) {
    isAuthenticated.value = true
    localStorage.setItem('isAuthenticated', true)
  } else {
    alert('Invalid credentials. Please refresh and try again.')
  }
}

onMounted(() => {
  if (localStorage.getItem('isAuthenticated')) {
    isAuthenticated.value = true
  } else {
    authenticateUser()
  }
})
</script>

<style lang="scss">
body, html {
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
}

main {
  height: calc(100dvh - 4rem) !important;
}

h1 {
  font-size: 1.875rem !important;
  line-height: 2.25rem !important;
  font-weight: 700 !important;
}

h2 {
  font-size: 1.5rem !important;
  line-height: 2rem !important;
  font-weight: 600 !important;
}

h3 {
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
  font-weight: 500 !important;
}

h4 {
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
}

button {
 &.primary,
 &.secondary {
  transition: all .2s ease-in-out;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  color: #fff;
  outline: none;
  width: 100%;
  font-weight: bold;

  &:active {
    transform: scale(.975);
    transition: .1s;
  }

  &.primary {
    background-color: #EC4899;
  
    &:active {
      background-color: #F9A8D4;
    }
  }
 }

  &.secondary {
    background-color: #000;
  
    &:active {
      background-color: #0F172A;
    }
  }
}
</style>