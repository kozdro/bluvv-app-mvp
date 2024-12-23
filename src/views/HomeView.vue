<template>
  <div v-if="!loading" class="w-full h-full bg-black relative flex flex-col items-center">
    <div
      v-if="isCommentsModelOpen || isShareModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeModals"
    />

    <Swiper
      :slides-per-view="1"
      direction="vertical"
      loop
      :initial-slide="activeVideoIndex"
      class="h-full w-full"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide
        v-for="(video, index) in videos"
        :key="index"
        class="w-full h-full relative bg-black"
      >
        <button class="absolute top-0 right-0 w-36 bg-black bg-opacity-30 text-white p-2 rounded-bl-2xl z-30" @click="$router.push('/profile')">
          Earnings: 
          <span class="font-bold text-pink-300" v-text="` €${totalEarnings.toFixed(2)}`" />
        </button>
        <video
          :ref="el => videoRef[index] = el"
          :src="video.url"
          autoplay
          loop
          muted
          playsinline
          preload="none"
          class="w-full h-full object-cover z-10"
          @click="toggleVideo(index)"
        />
        <svg
          v-if="!isVideoPlaying"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white z-20"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="fixed bottom-1/3 right-2 flex flex-col items-center gap-4 z-30">
          <button class="p-2 flex flex-col items-center gap-1 text-white" @click="handleLike(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              :fill="video.isLiked ? '#EF4444' : '#FFF'"
              class="w-8 h-8 transition"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <span class="text-xs drop-shadow" v-text="video.likes" />
          </button>

          <button class="p-2 text-white flex flex-col items-center gap-1" @click="toggleCommentsModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xs drop-shadow" v-text="video.comments" />
          </button>

          <button class="p-2 text-white flex flex-col items-center gap-1" @click="toggleShareModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xs drop-shadow" v-text="video.shares" />
          </button>
        </div>

        <div class="absolute bottom-6 rounded-r-[10rem] p-3 bg-black bg-opacity-30 z-30 h-[100px]">
          <div class="flex h-full items-center justify-center gap-4">
            <RouterLink :to="`/product/${video.product.name.toLowerCase().replace(/\s+/g, '-')}`" class="flex items-center gap-4">
              <img
                :src="video.product.image"
                :alt="`product ${video.product.name} image`"
                class="h-16 w-16 rounded-full"
              >
              <div class="text-white flex flex-col w-28">
                <span class="text-lg font-bold" v-text="`$${video.product.price.toFixed(2)}`" />
                {{ video.product.name }}
              </div>
            </RouterLink>
            <button
              type="button"
              class="primary !rounded-full !w-14 !h-14 text-xs flex items-center justify-center text-center !p-0"
              v-text="'Add to Cart'"
              @click="addToCart(video.product)"
            />
          </div>
        </div>

        <!-- <InteractionPanel
          :video="videos[activeVideoIndex]"
          class="fixed bottom-1/3 right-2"
          @like="handleLike(index)"
          @comments="toggleCommentsModal"
          @share="toggleShareModal"
        /> -->

        <!-- <ProductInfo :video="videos[activeVideoIndex]" class="absolute bottom-6" /> -->
      </SwiperSlide>
    </Swiper>

    <CommentsModal
      v-if="isCommentsModelOpen"
      :video="videos[activeVideoIndex]"
      @close="toggleCommentsModal"
    />
    <ShareModal v-if="isShareModalOpen" @close="toggleShareModal" />
  </div>

  <div v-else class="w-full h-full flex items-center justify-center bg-white">
    <img :src="require('../assets/logo.png')">
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// import InteractionPanel from '@/components/Video/InteractionPanel.vue'
// import ProductInfo from '@/components/Video/ProductInfo.vue'
import ShareModal from '@/components/Modals/ShareModal.vue'
import CommentsModal from '@/components/Modals/CommentsModal.vue'

import useVideo from '@/composables/useVideo.js'
import useCart from '@/composables/useCart.js'
import useUser from '@/composables/useUser.js'

import { isNavigatingWithinApp } from '@/router.js'

const router = useRouter()
const route = useRoute()
const {
  videos,
  isCommentsModelOpen,
  isShareModalOpen,
  isVideoPlaying,
  activeVideoIndex,
  // videoRef,
  watchedVideos,
  toggleCommentsModal,
  toggleShareModal,
  closeModals,
  handleLike,
  // toggleVideo,
} = useVideo()
const { addToCart } = useCart()
const { totalEarnings } = useUser()

const loading = ref(true)
const videoRef = ref([])
const earningsPerVideo = ref(videos.map(() => 0))
let earningsTimeout

const handleSlideChange = (swiper) => {
  isVideoPlaying.value = true
  activeVideoIndex.value = swiper.realIndex

  videoRef.value.forEach((videoRef, index) => {
    if (!videoRef) return

    if (index === swiper.realIndex) {
      videoRef.currentTime = 0
      videoRef.play()
      startEarningsTimer(index)
    } else {
      videoRef.pause()
      videoRef.currentTime = 0
    }
  })
}

const startEarningsTimer = (index) => {
  stopEarningsTimer()

  earningsTimeout = setTimeout(() => {
    if (!watchedVideos.value.has(index) && route.fullPath === '/') {
      const earnedAmount = Math.random() * (0.07 - 0.01) + 0.01
  
      earningsPerVideo.value[index] = earnedAmount
      totalEarnings.value += earnedAmount
      watchedVideos.value.add(index)
    }
  }, 3000)
}

const stopEarningsTimer = () => {
  if (!earningsTimeout) return

  clearTimeout(earningsTimeout)
  earningsTimeout = null
}

const toggleVideo = (index) => {
  const video = videoRef.value[index]

  if (!video || isCommentsModelOpen.value || isShareModalOpen.value) return

  if (video.paused) {
    isVideoPlaying.value = true
    video.play()
  } else {
    isVideoPlaying.value = false
    video.pause()
  }
}

onMounted(() => {
  if (isNavigatingWithinApp) {
    loading.value = false
  } else {
    setTimeout(() => {
      loading.value = false
    }, 2000)
  }

  videoRef.value = videos.map(() => null)
})

onBeforeUnmount(stopEarningsTimer)

router.beforeEach(stopEarningsTimer)
</script>

<style scoped lang="scss">
svg {
  filter: drop-shadow(0 0 20px #000);
}
</style>
