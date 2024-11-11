<template>
  <div class="rounded-r-[10rem] p-3 bg-[rgba(0,0,0,0.3)] z-[1000]">
    <div class="flex items-center gap-4">
      <img :src="video.productImage" class="h-16 w-16 rounded-full">
      <div class="text-white flex flex-col w-28">
        <span class="text-lg font-bold" v-text="`$${video.productPrice.toFixed(2)}`" />
        {{ video.productName }}
      </div>
      <button
        class="bg-green-500 rounded-full w-14 h-14 text-xs flex items-center justify-center text-center text-white font-bold"
        v-text="'Add to Cart'"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  video: Object
})
</script>
