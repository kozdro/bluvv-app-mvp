<template>
  <div class="w-full h-full bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-6" v-text="'Cart'" />
    <div v-if="cartItems.length" class="space-y-4">
      <CartItemCard
        v-for="(item, index) in cartItems"
        :key="index"
        :item="item"
      />
    </div>
    <div v-else class="text-center mt-20">
      <h3 class="text-xl font-semibold text-gray-600" v-text="'Your cart is empty'" />
      <RouterLink
        to="/"
        class="text-blue-500 hover:underline mt-4 block"
        v-text="'Continue Shopping'"
      />
    </div>
    <div v-if="cartItems.length" class="mt-8">
      <div class="flex justify-between items-center text-lg font-bold mb-4">
        Total:
        <span class="text-xl" v-text="`$${totalPrice.toFixed(2)}`" />
      </div>
      <button class="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600" v-text="'Checkout'" />
    </div>
  </div>
</template>

<script setup>
import CartItemCard from '@/components/CartItemCard.vue'

import useCart from '@/composables/useCart.js'

const { cartItems, totalPrice } = useCart()
</script>

<style lang="scss" scoped>
button {
  transition: background-color 0.3s;
}
</style>