<template>
  <div class="w-full h-full p-4 overflow-y-auto">
    <h1 class="text-3xl font-bold mb-6" v-text="'Shop'" />
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

const products = [
  { name: 'Black Sheet Mask', price: 4.34, image: require('@/assets/photos/mask.jpg') },
  { name: 'Gel Face Cream', price: 18.95, image: require('@/assets/photos/cream.jpeg') },
  { name: 'Curling Iron', price: 79.90, image: require('@/assets/photos/iron.jpeg') },
  { name: 'Pinky Blush', price: 12.65, image: require('@/assets/photos/blush.jpg') },
  { name: 'Mascara High Volume', price: 25.40, image: require('@/assets/photos/mascara.jpg') },
]
</script>
