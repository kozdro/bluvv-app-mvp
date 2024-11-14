const products = [
  { name: 'Black Sheet Mask', price: 4.34, image: require('@/assets/photos/mask.jpg') },
  { name: 'Gel Face Cream', price: 18.95, image: require('@/assets/photos/cream.jpeg') },
  { name: 'Curling Iron', price: 79.90, image: require('@/assets/photos/iron.jpeg') },
  { name: 'Pinky Blush', price: 12.65, image: require('@/assets/photos/blush.jpg') },
  { name: 'Mascara High Volume', price: 25.40, image: require('@/assets/photos/mascara.jpg') },
]

const productsData = {
  'pinky-blush': {
    name: 'Pinky Blush',
    price: 12.65,
    image: require('../assets/photos/blush.jpg'),
    description: 'A light and soft blush that gives your cheeks a natural glow. Suitable for all skin types.',
    reviews: [
      { user: 'User1', date: '2024-11-10', comment: 'Great product! Gives a natural look.' },
      { user: 'User2', date: '2024-11-08', comment: 'Loved the color, very easy to apply.' },
    ],
  },
  'gel-face-cream': {
    name: 'Gel Face Cream',
    price: 18.95,
    image: require('../assets/photos/cream.jpeg'),
    description: 'A refreshing gel cream that hydrates and nourishes your skin.',
    reviews: [
      { user: 'User3', date: '2024-11-12', comment: 'Very hydrating and light on the skin.' },
      { user: 'User4', date: '2024-11-09', comment: 'Perfect for my dry skin, love it!' },
    ],
  },
  'curling-iron': {
    name: 'Curling Iron',
    price: 79.90,
    image: require('../assets/photos/iron.jpeg'),
    description: 'A professional-grade curling iron for beautiful curls and waves.',
    reviews: [
      { user: 'UserX', date: '2024-11-14', comment: 'Best curling iron I have used so far!' },
      { user: 'UserY', date: '2024-11-11', comment: 'Heats up quickly and works perfectly.' },
    ],
  },
  'black-sheet-mask': {
    name: 'Black Sheet Mask',
    price: 4.34,
    image: require('../assets/photos/mask.jpg'),
    description: 'A soothing black sheet mask that helps detoxify and refresh your skin.',
    reviews: [
      { user: 'User5', date: '2024-11-13', comment: 'Very relaxing and left my skin feeling great.' },
      { user: 'User6', date: '2024-11-10', comment: 'Easy to use, and my skin felt smoother after.' },
    ],
  },
  'mascara-high-volume': {
    name: 'Mascara High Volume',
    price: 25.40,
    image: require('../assets/photos/mascara.jpg'),
    description: 'A high-volume mascara that gives your lashes a dramatic look.',
    reviews: [
      { user: 'UserA', date: '2024-11-15', comment: 'Gives great volume without clumping.' },
      { user: 'UserB', date: '2024-11-12', comment: 'The best mascara I have tried in a long time!' },
    ],
  },
}

export default () => {
  return {
    products,
    productsData,
  }
}
