<template>
  <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
    <RouterLink :to="`/product/${item.name.toLowerCase().replace(/\s+/g, '-')}`" class="flex-1 flex items-center gap-4">
      <img
        :src="item.image"
        :alt="`product ${item.name} image`"
        class="w-16 h-16 rounded-full"
      />
      <div class="flex-1">
        <h4 class="font-bold" v-text="item.name" />
        <p class="text-gray-500" v-text="`$${item.price.toFixed(2)} x ${item.quantity}`" />
      </div>
    </RouterLink>
    <button
      type="button"
      class="text-red-500 hover:text-red-700 active:text-red-700 p-2"
      @click="removeFromCart(item)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import useCart from '@/composables/useCart.js'

defineProps({
  item: Object,
})

const { removeFromCart } = useCart()
</script>

<style scoped>
button {
  transition: color 0.3s;
}
</style>
