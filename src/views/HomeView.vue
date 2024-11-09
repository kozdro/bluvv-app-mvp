<template>
  <div class="w-full h-full overflow-hidden bg-black relative flex flex-col items-center">
    <Swiper
      :slides-per-view="1"
      direction="vertical"
      loop
      class="video-list"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(video, index) in videos" :key="index">
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
      </SwiperSlide>
    </Swiper>

    <div class="fixed bottom-1/3 right-2 flex flex-col items-center gap-4 z-[1000]">
      <button class="p-2 flex flex-col items-center gap-1 text-white" @click="handleLike">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :fill="isLiked ? '#ef4444' : '#FFF'"
          class="w-8 h-8 transition"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <span class="text-xs drop-shadow" v-text="likesNumber" />
      </button>
      <button class="p-2 text-white flex flex-col items-center gap-1">
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
        <span class="text-xs drop-shadow" v-text="commentsNumber" />
      </button>
      <button class="p-2 text-white flex flex-col items-center gap-1">
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
        <span class="text-xs drop-shadow" v-text="sharesNumber" />
      </button>
    </div>

    <div class="absolute bottom-2 left-0 rounded-r-[10rem] p-3 bg-[rgba(0,0,0,0.3)] z-[1000]">
      <div class="flex items-center gap-4">
        <div class="bg-white h-16 w-16 rounded-full"></div>
        <div class="text-white flex flex-col">
          <span class="text-lg font-bold" v-text="'$10.54'" />
          Product Name
        </div>
        <div class="bg-green-500 rounded-full w-14 h-14 text-xs flex items-center justify-center text-center text-white font-bold" v-text="'Add to Cart'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const videos = ref([
  { url: require('../assets/videos/film-1.mp4'), description: 'Video 1' },
  { url: require('../assets/videos/film-2.mp4'), description: 'Video 2' },
  { url: require('../assets/videos/film-3.mp4'), description: 'Video 3' },
  { url: require('../assets/videos/film-4.mp4'), description: 'Video 4' },
  { url: require('../assets/videos/film-5.mp4'), description: 'Video 5' },
])
const videoRef = ref([])
const isVideoPlaying = ref(true)
const isLiked = ref(false)
const likesNumber = ref(782)
const commentsNumber = ref(63)
const sharesNumber = ref(7)

const handleLike = () => {
  if (isLiked.value) {
    likesNumber.value--
  } else {
    likesNumber.value++
  }

  isLiked.value = !isLiked.value
}

const handleSlideChange = (swiper) => {
  isVideoPlaying.value = true
  isLiked.value = false
  videoRef.value.forEach((videoRef, index) => {
    if (videoRef) {
      if (index === swiper.realIndex) {
        videoRef.currentTime = 0
        videoRef.play()
      } else {
        videoRef.pause()
        videoRef.currentTime = 0
      }
    }
  })
}

const toggleVideo = (index) => {
  const video = videoRef.value[index]

  if (!video) return

  if (video.paused) {
    isVideoPlaying.value = true
    video.play()
  } else {
    isVideoPlaying.value = false
    video.pause()
  }
}

onMounted(() => {
  videoRef.value = videos.value.map(() => null)
})
</script>

<style scoped lang="scss">
.video-list {
  height: calc(100vh - 4rem);
}

svg {
  filter: drop-shadow(0 0 20px #000);
}
</style>
