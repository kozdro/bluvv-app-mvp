<template>
  <div class="w-full h-full p-6 overflow-y-auto">
    <h1 class="text-3xl font-bold mb-6" v-text="'Checkout'" />

    <form @submit.prevent="makeOrder">
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4" v-text="'Shipping'" />
        <div class="flex flex-col gap-4">
          <input type="text" v-model="shippingInfo.fullName" placeholder="Full Name" class="input-field" required disabled />
          <input type="text" v-model="shippingInfo.address" placeholder="Address" class="input-field" required disabled />
          <input type="text" v-model="shippingInfo.city" placeholder="City" class="input-field" required disabled />
          <input type="text" v-model="shippingInfo.postalCode" placeholder="Postal Code" class="input-field" required disabled />
          <input type="text" v-model="shippingInfo.country" placeholder="Country" class="input-field" required disabled />
          <input type="tel" v-model="shippingInfo.phone" placeholder="Phone Number" class="input-field" required disabled />
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4" v-text="'Payment'" />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="flex items-center gap-2">
              <input type="radio" v-model="paymentInfo.method" value="Bank Transfer" /> Bank Transfer
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" v-model="paymentInfo.method" value="Card" /> Credit/Debit Card
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" v-model="paymentInfo.method" value="PayPal" /> PayPal
            </label>
          </div>

          <div v-if="paymentInfo.method === 'Card'" class="flex flex-col gap-4">
            <input type="text" v-model="paymentInfo.cardNumber" placeholder="Card Number" class="input-field" required disabled />
            <div class="flex gap-4">
              <input type="text" v-model="paymentInfo.expiryDate" placeholder="Expiry Date (MM/YY)" class="input-field" required disabled />
              <input type="text" v-model="paymentInfo.cvc" placeholder="CVC" class="input-field" required disabled />
            </div>
            <input type="text" v-model="paymentInfo.cardHolderName" placeholder="Cardholder Name" class="input-field" required disabled />
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4" v-text="'Order Summary'" />
        <ul class="space-y-4">
          <li v-for="item in cartItems" :key="item.id" class="flex justify-between">
            {{ item.name }}
            <span v-text="`$${item.price.toFixed(2)}`" />
          </li>
        </ul>
        <div class="flex justify-between mt-6 text-xl font-bold">
          Total:
          <span v-text="`$${totalPrice.toFixed(2)}`" />
        </div>
      </div>

      <button
        type="submit"
        class="primary"
        v-text="'Place Order'"
      />
    </form>
  </div>
</template>

<script setup>
import useCart from '@/composables/useCart.js'
import useOrder from '@/composables/useOrder.js'

const { cartItems, totalPrice } = useCart()
const { shippingInfo, paymentInfo, makeOrder } = useOrder()
</script>

<style scoped lang="scss">
.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s;
}

input[type="radio"] {
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #fce7f3;
  transition: 0.2s all linear;
  margin-right: 5px;

  &:checked {
    border: 6px solid #f9a8d4;
  }
}
</style>
