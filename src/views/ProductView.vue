<template>
  <div class="w-full h-full flex flex-col p-4 overflow-y-auto">
    <RouterLink
      to=""
      class="text-black mb-4 flex items-center gap-2 text-sm"
      @click="$router.back()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clip-rule="evenodd" />
      </svg>
      back
    </RouterLink>
    <div class="flex flex-col md:flex-row gap-6">
      <img
        :src="product.image"
        :alt="`product ${product.name} image`"
        class="w-full md:w-1/2 rounded-lg object-cover transition scale-105"
      >
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h1 class="mb-4" v-text="product.name" />
          <p class="text-xl text-gray-800 mb-2" v-text="`$${product.price.toFixed(2)}`" />
          <p class="text-gray-600" v-text="product.description" />
        </div>
        <button
          class="primary mt-6"
          @click="addToCart(product)"
          v-text="'Add to Cart'"
        />
      </div>
    </div>
    <div class="w-full max-w-2xl mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 class="mb-4" v-text="'Customer Reviews'" />
      <ul class="space-y-4">
        <li
          v-for="(review, index) in product.reviews"
          :key="index"
          class="border-b pb-4"
        >
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <h4 class="font-bold" v-text="review.user" />
              <p class="text-sm text-gray-500" v-text="review.date" />
            </div>
          </div>
          <p class="text-gray-800" v-text="review.comment" />
        </li>
      </ul>
      <button class="secondary mt-4" v-text="'Load More Reviews'" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useCart from '@/composables/useCart.js'
import useProducts from '@/composables/useProducts.js'


const route = useRoute()
const { addToCart } = useCart()
const { productsData } = useProducts()

const product = computed(() => productsData[route.params.productName])
</script>
