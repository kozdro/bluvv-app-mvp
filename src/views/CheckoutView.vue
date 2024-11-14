<template>
  <div class="w-full h-full p-6 overflow-y-auto">
    <h1 class="mb-6" v-text="'Checkout'" />

    <form @submit.prevent="makeOrder">
      <div class="mb-8">
        <h2 class="mb-4" v-text="'Shipping'" />
        <div class="flex flex-col gap-4">
          <input
            v-model="shippingInfo.fullName"
            type="text"
            placeholder="Full Name"
            required
            disabled
            class="input-field"
          >
          <input
            v-model="shippingInfo.address"
            type="text"
            placeholder="Address"
            required
            disabled
            class="input-field"
          >
          <input
            v-model="shippingInfo.city"
            type="text" 
            placeholder="City"
            required
            disabled
            class="input-field"
          >
          <input
            v-model="shippingInfo.postalCode"
            type="text"
            placeholder="Postal Code"
            required
            disabled
            class="input-field"
          >
          <input
            v-model="shippingInfo.country"
            type="text"
            placeholder="Country"
            required
            disabled
            class="input-field"
          >
          <input
            v-model="shippingInfo.phone"
            type="tel"
            placeholder="Phone Number"
            required
            disabled
            class="input-field"
          >
        </div>
      </div>

      <div class="mb-8">
        <h2 class="mb-4" v-text="'Payment'" />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                v-model="paymentInfo.method"
                value="Bank Transfer"
              >
              Bank Transfer
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                v-model="paymentInfo.method"
                value="Card"
              >
              Credit/Debit Card
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                v-model="paymentInfo.method"
                value="PayPal"
              >
              PayPal
            </label>
          </div>

          <div v-if="paymentInfo.method === 'Card'" class="flex flex-col gap-4">
            <input
              v-model="paymentInfo.cardNumber"
              type="text"
              placeholder="Card Number"
              required
              disabled 
              class="input-field"
            >
            <div class="flex gap-4">
              <input
                v-model="paymentInfo.expiryDate"
                type="text"
                placeholder="Expiry Date (MM/YY)"
                required
                disabled 
                class="input-field"
              >
              <input
                v-model="paymentInfo.cvc"
                type="text"
                laceholder="CVC"
                required
                disabled
                class="input-field"
              >
            </div>
            <input
              v-model="paymentInfo.cardHolderName"
              type="text"
              placeholder="Cardholder Name"
              required
              disabled 
              class="input-field"
            >
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="mb-4" v-text="'Order Summary'" />
        <ul class="space-y-4">
          <li
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-between"
          >
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
