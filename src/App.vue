<template>
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

h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
}

h4 {
  font-size: 1.125rem;
  line-height: 1.75rem;
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