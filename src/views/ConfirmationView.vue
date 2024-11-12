<template>
  <div class="w-full h-full p-6 overflow-y-auto">
    <h1 class="text-3xl font-bold mb-6" v-text="'Order Confirmation'" />

    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-pink-500" v-text="'Thank You for Your Order!'" />
      <p class="text-lg mb-6" v-text="'Your order has been placed successfully.'" />
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4" v-text="'Shipping Information'" />
      <ul class="space-y-2">
        <li><strong v-text="'Full Name:'"/> {{ orderInfo.shippingInfo.fullName }} </li>
        <li><strong v-text="'Address:'"/> {{ orderInfo.shippingInfo.address }} </li>
        <li><strong v-text="'City:'"/> {{ orderInfo.shippingInfo.city }} </li>
        <li><strong v-text="'Postal Code:'"/> {{ orderInfo.shippingInfo.postalCode }} </li>
        <li><strong v-text="'Country:'"/> {{ orderInfo.shippingInfo.country }} </li>
        <li><strong v-text="'Phone Number:'" /> {{ orderInfo.shippingInfo.phone }} </li>
      </ul>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4" v-text="'Payment Method'" />
      <p v-text="orderInfo.paymentInfo.method" />
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4" v-text="'Order Summary'" />
      <ul class="space-y-4 list-none">
        <li v-for="item in orderInfo.cartItems" :key="item.id" class="flex justify-between">
          <span class="text-pink-500" v-text="item.name" />
          <span v-text="`$${item.price.toFixed(2)}`" />
        </li>
      </ul>
      <div class="flex justify-between mt-6 text-xl font-bold">
        Total:
        <span v-text="`$${orderInfo.totalPrice.toFixed(2)}`" />
      </div>
    </div>

    <RouterLink to="/">
      <button class="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-300 transition" v-text="'Back to Home'" />
    </RouterLink>
  </div>
</template>

<script setup>
import useOrder from '@/composables/useOrder.js'

const { orderInfo } = useOrder()
</script>
