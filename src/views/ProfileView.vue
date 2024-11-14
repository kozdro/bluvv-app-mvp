<template>
  <div class="w-full h-full flex flex-col p-4 overflow-y-auto">
    <h1 class="mb-10" v-text="isAuthenticated ? 'My Account' : 'Login'" />

    <form v-if="!isAuthenticated" @submit.prevent="login">
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 text-sm font-bold mb-2"
          v-text="'Email:'"
        />
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          autocomplete="email"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
        >
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block text-gray-700 text-sm font-bold mb-2"
          v-text="'Password:'"
        />
        <div class="relative">
          <input
            v-model="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            id="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
          >
          <button
            type="button"
            class="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
            @click="toggleShowPassword"
          >
            <svg
              v-if="isPasswordVisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="primary"
        v-text="'Login'"
      />

      <p
        v-if="errorMessage"
        class="text-red-500 text-sm mt-2"
        v-text="errorMessage"
      />
    </form>

    <div v-else class="w-full flex flex-col flex-1">
      <div class="bg-gray-100 p-4 rounded-lg">
        <ul class="list-none mt-4 space-y-4">
          <li class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-pink-500 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            <div>
              <strong v-text="'My Addresses:'" />
              <p class="text-gray-700">Manage your shipping and billing addresses.</p>
            </div>
          </li>
          <li class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-pink-500 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
          </svg>
            <div>
              <strong v-text="'My Orders:'" />
              <p class="text-gray-700">View your past orders and track your current orders.</p>
            </div>
          </li>
          <li class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-pink-500 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div>
              <strong v-text="`My Obtained Points: ${totalEarnings.toFixed(2)}`" />
              <p class="text-gray-700">Check your loyalty points and rewards.</p>
            </div>
          </li>
        </ul>
      </div>
      <button
        class="secondary mt-auto"
        v-text="'Logout'"
        @click="logout"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import useUser from '@/composables/useUser.js'

const {
  isAuthenticated,
  totalEarnings,
  email,
  password,
  errorMessage,
  login,
  logout,
} = useUser()

const isPasswordVisible = ref(false)

const toggleShowPassword = () => (isPasswordVisible.value = !isPasswordVisible.value)
</script>
