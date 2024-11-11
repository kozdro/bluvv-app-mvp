import { computed, ref } from 'vue'

const cartItems = ref([])

export default () => {
  const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  const addToCart = (product) => {
    const existingItem = cartItems.value.find(el => el.name === product.name)

    if (existingItem) {
      return existingItem.quantity++
    }

    cartItems.value.push({
      ...product,
      quantity: 1,
    })
  }

  const removeFromCart = (product) => {
    const productToRemove = cartItems.value.findIndex(el => el.name === product.name)

    cartItems.value.splice(productToRemove, 1)
  }

  return {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
  }
}
