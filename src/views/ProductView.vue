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
          <h1 class="text-3xl font-bold mb-4" v-text="product.name" />
          <p class="text-xl text-gray-800 mb-2" v-text="`$${product.price.toFixed(2)}`" />
          <p class="text-gray-600" v-text="product.description" />
        </div>
        <button
          class="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg font-bold hover:bg-pink-300 active:bg-pink-300 transition"
          @click="addToCart(product)"
          v-text="'Add to Cart'"
        />
      </div>
    </div>
    <div class="w-full max-w-2xl mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4" v-text="'Customer Reviews'" />
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
      <button class="mt-4 bg-black hover:bg-slate-900 active:bg-slate-900 text-white p-3 rounded-lg font-bold w-full transition" v-text="'Load More Reviews'" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useCart from '@/composables/useCart.js'

const route = useRoute()
const { addToCart } = useCart()

const productsData = {
  'pinky-blush': {
    name: 'Pinky Blush',
    price: 12.65,
    image: require('../assets/photos/blush.jpg'),
    description: 'A light and soft blush that gives your cheeks a natural glow. Suitable for all skin types.',
    reviews: [
      { user: 'User1', date: '2024-11-10', comment: 'Great product! Gives a natural look.' },
      { user: 'User2', date: '2024-11-08', comment: 'Loved the color, very easy to apply.' },
    ],
  },
  'gel-face-cream': {
    name: 'Gel Face Cream',
    price: 18.95,
    image: require('../assets/photos/cream.jpeg'),
    description: 'A refreshing gel cream that hydrates and nourishes your skin.',
    reviews: [
      { user: 'User3', date: '2024-11-12', comment: 'Very hydrating and light on the skin.' },
      { user: 'User4', date: '2024-11-09', comment: 'Perfect for my dry skin, love it!' },
    ],
  },
  'curling-iron': {
    name: 'Curling Iron',
    price: 79.90,
    image: require('../assets/photos/iron.jpeg'),
    description: 'A professional-grade curling iron for beautiful curls and waves.',
    reviews: [
      { user: 'UserX', date: '2024-11-14', comment: 'Best curling iron I have used so far!' },
      { user: 'UserY', date: '2024-11-11', comment: 'Heats up quickly and works perfectly.' },
    ],
  },
  'black-sheet-mask': {
    name: 'Black Sheet Mask',
    price: 4.34,
    image: require('../assets/photos/mask.jpg'),
    description: 'A soothing black sheet mask that helps detoxify and refresh your skin.',
    reviews: [
      { user: 'User5', date: '2024-11-13', comment: 'Very relaxing and left my skin feeling great.' },
      { user: 'User6', date: '2024-11-10', comment: 'Easy to use, and my skin felt smoother after.' },
    ],
  },
  'mascara-high-volume': {
    name: 'Mascara High Volume',
    price: 25.40,
    image: require('../assets/photos/mascara.jpg'),
    description: 'A high-volume mascara that gives your lashes a dramatic look.',
    reviews: [
      { user: 'UserA', date: '2024-11-15', comment: 'Gives great volume without clumping.' },
      { user: 'UserB', date: '2024-11-12', comment: 'The best mascara I have tried in a long time!' },
    ],
  },
}

const product = computed(() => productsData[route.params.productName])
</script>
