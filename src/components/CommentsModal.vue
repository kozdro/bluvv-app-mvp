<template>
  <div class="fixed bottom-0 w-full bg-white h-2/3 rounded-t-lg p-4 z-50 overflow-hidden flex flex-col">
    <div class="flex justify-between items-center mb-4 border-b pb-2">
      <h3 class="text-lg font-bold" v-text="'Comments'" />
      <button
        class="text-gray-700 text-xl"
        @click="$emit('close')"
      >
        &times;
      </button>
    </div>

    <div class="flex-1 overflow-y-auto mb-2 pr-2">
      <ul class="flex flex-col gap-4">
        <li
          v-for="(comment, index) in video.commentsList"
          :key="index"
          class="flex gap-3 items-start"
        >
          <div class="w-10 h-10 rounded-full bg-gray-300 shrink-0" />
          <div>
            <div class="font-bold text-sm text-gray-900" v-text="`User ${index + 1}`" />
            <div class="text-gray-800 text-sm" v-text="comment" />
          </div>
        </li>
      </ul>
    </div>

    <button class="mt-auto w-full py-2 bg-gray-200 text-gray-700 rounded-lg font-bold" v-text="'Load More Comments'" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  video: Object,
})
</script>
