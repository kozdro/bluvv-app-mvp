<template>
  <div class="w-full h-full p-4 flex flex-col overflow-y-auto">
    <h1 class="mb-6" v-text="'Cart'" />
    <div v-if="cartItems.length" class="space-y-4">
      <CartItemCard
        v-for="(item, index) in cartItems"
        :key="index"
        :item="item"
      />
    </div>
    <div v-else class="text-center mt-20">
      <h3 class="text-gray-600" v-text="'Your cart is empty'" />
      <RouterLink to="/" class="text-blue-500 hover:underline active:underline mt-4 block">
        <button class="secondary" v-text="'Continue shopping'" />
      </RouterLink>
    </div>
    <div v-if="cartItems.length" class="mt-auto">
      <div class="flex justify-between items-center text-lg font-bold mb-4">
        Total:
        <span class="text-xl" v-text="`$${totalPrice.toFixed(2)}`" />
      </div>
      <RouterLink to="/checkout">
        <button class="primary" v-text="'Checkout'" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import CartItemCard from '@/components/Cart/CartItemCard.vue'

import useCart from '@/composables/useCart.js'

const { cartItems, totalPrice } = useCart()
</script>
