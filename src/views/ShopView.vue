<template>
  <div class="w-full h-full p-4 overflow-y-auto">
    <h1 class="mb-6" v-text="'Shop'" />
    <div class="grid grid-cols-2 gap-4">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'

import useProducts from '@/composables/useProducts.js'

const { products } = useProducts()
</script>
