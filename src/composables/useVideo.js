import { ref } from 'vue'

const videos = ref([
  {
    url: require('../assets/videos/film-1.mp4'),
    likes: 782,
    comments: 63,
    shares: 7,
    isLiked: false,
    productName: 'Black sheet mask',
    productPrice: 4.34,
    productImage: require('../assets/photos/mask.jpg'),
    commentsList: [
      'This mask works wonders! My skin feels so soft afterward.',
      'I love using it after a long day. It’s so refreshing!',
      'Does it work for sensitive skin? I have very delicate skin and I’m curious.',
      'Absolutely love this product. I use it twice a week!',
      'Perfect for a quick spa day at home.',
    ],
  },
  {
    url: require('../assets/videos/film-2.mp4'),
    likes: 456,
    comments: 34,
    shares: 15,
    isLiked: false,
    productName: 'Gel face cream',
    productPrice: 18.95,
    productImage: require('../assets/photos/cream.jpeg'),
    commentsList: [
      'Best cream I have used! Keeps my skin hydrated all day.',
      'I’ve tried many creams, but this one really works for me.',
      'Worth the price! A little goes a long way.',
      'I love the texture of this cream, not too oily.',
      'It’s perfect for dry skin. My face feels moisturized all day!',
    ],
  },
  {
    url: require('../assets/videos/film-3.mp4'),
    likes: 1123,
    comments: 89,
    shares: 25,
    isLiked: false,
    productName: 'Curling iron',
    productPrice: 79.90,
    productImage: require('../assets/photos/iron.jpeg'),
    commentsList: [
      'Curls my hair perfectly! It’s so easy to use.',
      'Doesn’t damage my hair at all. I’m in love!',
      'Heats up really fast! Saves me so much time in the morning.',
      'I use this curling iron almost every day. Highly recommend it!',
      'My curls last all day thanks to this iron. Fantastic quality!',
    ],
  },
  {
    url: require('../assets/videos/film-4.mp4'),
    likes: 324,
    comments: 18,
    shares: 5,
    isLiked: false,
    productName: 'Pinky blush',
    productPrice: 12.65,
    productImage: require('../assets/photos/blush.jpg'),
    commentsList: [
      'Beautiful color! It looks so natural on my skin.',
      'Lasts all day and gives me a nice glow.',
      'Blends easily and is not too powdery. Love it!',
      'Perfect for that subtle rosy look. Matches my skin tone perfectly.',
      'I get compliments on my blush all the time. Great product!',
    ],
  },
  {
    url: require('../assets/videos/film-5.mp4'),
    likes: 985,
    comments: 67,
    shares: 12,
    isLiked: false,
    productName: 'Mascara High Volume',
    productPrice: 25.40,
    productImage: require('../assets/photos/mascara.jpg'),
    commentsList: [
      'Gives my lashes so much volume! No need for falsies anymore.',
      'No clumps at all, and stays on all day.',
      'Best mascara I’ve ever tried. My lashes are super long!',
      'It really gives that high volume effect. My favorite!',
      'Perfect for dramatic lashes. Great for nights out!',
    ],
  },
])
const videoRef = ref([])
const activeVideoIndex = ref(0)
const isCommentsModelOpen = ref(false)
const isShareModalOpen = ref(false)
const isVideoPlaying = ref(true)
const watchedVideos = ref(new Set())

export default () => {
  const toggleCommentsModal = () => {
    isCommentsModelOpen.value = !isCommentsModelOpen.value
  }
  
  const toggleShareModal = () => {
    isShareModalOpen.value = !isShareModalOpen.value
  }
  
  const closeModals = () => {
    isCommentsModelOpen.value = false
    isShareModalOpen.value = false
  }

  const handleLike = (index) => {
    const video = videos.value[index]
  
    if (video.isLiked) {
      video.likes--
    } else {
      video.likes++
    }
  
    video.isLiked = !video.isLiked
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

  return {
    videos,
    isCommentsModelOpen,
    isShareModalOpen,
    isVideoPlaying,
    activeVideoIndex,
    videoRef,
    watchedVideos,
    toggleCommentsModal,
    toggleShareModal,
    closeModals,
    handleLike,
    toggleVideo,
  }
}
