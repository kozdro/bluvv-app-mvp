<template>
  <div class="w-full h-full overflow-hidden bg-black relative flex flex-col items-center">
    <div
      v-if="isCommentsModelOpen || isShareModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-[1500]"
      @click="closeModals"
    />

    <Swiper
      :slides-per-view="1"
      direction="vertical"
      loop
      class="h-full w-full"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide
        v-for="(video, index) in videos"
        :key="index"
        class="w-full h-full overflow-hidden relative bg-black"
      >
          <video
            :ref="el => videoRef[index] = el"
            :src="video.url"
            autoplay
            loop
            muted
            playsinline
            preload="none"
            class="w-full h-full object-cover"
            @click="toggleVideo(index)"
          />
          <svg
            v-if="!isVideoPlaying"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
  
          <InteractionPanel
            :video="videos[activeVideoIndex]"
            class="fixed bottom-1/3 right-2"
            @like="handleLike(index)"
            @comments="toggleCommentsModal"
            @share="toggleShareModal"
          />

          <ProductInfo :video="videos[activeVideoIndex]" class="absolute bottom-6" />
      </SwiperSlide>
    </Swiper>

    <CommentsModal
      v-if="isCommentsModelOpen"
      :video="videos[activeVideoIndex]"
      @close="toggleCommentsModal"
    />
    <ShareModal v-if="isShareModalOpen" @close="toggleShareModal" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import InteractionPanel from '@/components/InteractionPanel.vue'
import ProductInfo from '@/components/ProductInfo.vue'
import ShareModal from '@/components/ShareModal.vue'
import CommentsModal from '@/components/CommentsModal.vue'

import useVideo from '@/composables/useVideo.js'

const {
  videos,
  isCommentsModelOpen,
  isShareModalOpen,
  isVideoPlaying,
  activeVideoIndex,
  videoRef,
  toggleCommentsModal,
  toggleShareModal,
  closeModals,
  handleLike,
  toggleVideo,
} = useVideo()

const handleSlideChange = (swiper) => {
  isVideoPlaying.value = true
  activeVideoIndex.value = swiper.realIndex

  videoRef.value.forEach((videoRef, index) => {
    if (!videoRef) return

    if (index === swiper.realIndex) {
      videoRef.currentTime = 0
      videoRef.play()
    } else {
      videoRef.pause()
      videoRef.currentTime = 0
    }
  })
}

onMounted(() => (videoRef.value = videos.value.map(() => null)))
</script>

<style scoped lang="scss">
svg {
  filter: drop-shadow(0 0 20px #000);
}
</style>
