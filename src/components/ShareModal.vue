<template>
  <div class="fixed bottom-0 w-full bg-white h-1/4 rounded-t-lg p-4 overflow-y-auto z-[2000]">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-bold" v-text="'Share'" />
      <button class="text-gray-700 text-xl" @click="$emit('close')">
        &times;
      </button>
    </div>
    <ul class="flex justify-between">
      <li class="flex flex-col items-center">
        <i class="fab fa-facebook-square text-3xl text-blue-600" />
        <span class="text-sm" v-text="'Facebook'" />
      </li>
      <li class="flex flex-col items-center">
        <i class="fab fa-instagram text-3xl text-pink-500" />
        <span class="text-sm" v-text="'Instagram'" />
      </li>
      <li class="flex flex-col items-center">
        <i class="fab fa-tiktok text-3xl text-black" />
        <span class="text-sm" v-text="'TikTok'" />
      </li>
      <li class="flex flex-col items-center">
        <i class="fab fa-facebook-messenger text-3xl text-blue-400" />
        <span class="text-sm" v-text="'Messenger'" />
      </li>
      <li class="flex flex-col items-center">
        <i class="fab fa-whatsapp text-3xl text-green-500" />
        <span class="text-sm" v-text="'WhatsApp'" />
      </li>
    </ul>
  </div>
</template>
