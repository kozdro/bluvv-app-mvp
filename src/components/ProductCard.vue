<template>
  <div class="flex flex-col items-center bg-white p-4 rounded-lg shadow-md h-80">
    <RouterLink :to="`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`" class="flex-1 flex flex-col items-center cursor-pointer">
      <img
        :src="product.image"
        :alt="`product ${product.name} image`"
        class="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h4 class="text-lg font-semibold mb-2 text-center" v-text="product.name" />
      <p class="text-gray-500 mb-4 mt-auto" v-text="`$${product.price.toFixed(2)}`" />
    </RouterLink>
    <button
      class="w-full bg-pink-500 text-white py-2 rounded-lg font-bold hover:bg-pink-300 active:bg-pink-300 transition mt-auto"
      v-text="'Add to Cart'"
      @click="addToCart(product)"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import useCart from '@/composables/useCart.js'

defineProps({
  product: Object,
})

const { addToCart } = useCart()
</script>
