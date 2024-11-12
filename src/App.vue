<template>
  <template v-if="device.mobile">
    <main class="mb-16 box-border">
      <RouterView />
    </main>
    
    <NavBar />
  </template>

  <div v-else class="h-screen w-full flex items-center justify-center">
    <h1 class="text-3xl" v-text="'Please use mobile device.'" />
  </div>
</template>

<script setup>
import { useDevice } from 'next-vue-device-detector'

import NavBar from '@/components/NavBar.vue'

const device = useDevice()
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

main {
  height: calc(100dvh - 4rem);
}
</style>