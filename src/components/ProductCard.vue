<template>
  <div class="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
    <img
      :src="product.image"
      :alt="`product ${product.name} image`"
      class="w-full h-32 object-cover rounded-lg mb-4"
    />
    <h4 class="text-lg font-semibold mb-2 text-center" v-text="product.name" />
    <div class="w-full flex flex-col items-center mt-auto">
      <p class="text-gray-500 mb-4" v-text="`$${product.price.toFixed(2)}`" />
      <button
        class="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition"
        v-text="'Add to Cart'"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  product: Object
})
</script>
