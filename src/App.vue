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
  background-position: center;
  transition: background 0.8s;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  outline: none;
  width: 100%;
  font-weight: bold;

  &:active {
    background-size: 100%;
    transition: background 0s;
  }

  &.primary {
    background-color: #EC4899;

    &:hover {
      background: #F9A8D4 radial-gradient(circle, transparent 1%, #F9A8D4 1%) center/15000%;
    }
  
    &:active {
      background-color: #F9A8D4;
    }
  }
 }

  &.secondary {
    background-color: #000;
    
    &:hover {
      background: #0F172A radial-gradient(circle, transparent 1%, #0F172A 1%) center/15000%;
    }
  
    &:active {
      background-color: #0F172A;
    }
  }
}
</style>