import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import useCart from '@/composables/useCart.js'

const orderInfo = reactive({
  shippingInfo: {},
  paymentInfo: {},
  cartItems: [],
  totalPrice: 0,
})

const shippingInfo = reactive({
  fullName: 'Test User',
  address: 'Neue Schönhauser Str. 2',
  city: 'Berlin',
  postalCode: '10178',
  country: 'Germany',
  phone: '+49017614284340',
})

const paymentInfo = reactive({
  method: 'Bank Transfer',
  cardNumber: '1234 4321 0000 2134 3421',
  expiryDate: '10/28',
  cvc: '980',
  cardHolderName: 'Test User',
})

export default () => {
  const router = useRouter()
  const { cartItems, totalPrice } = useCart()

  const makeOrder = () => {
    orderInfo.shippingInfo = shippingInfo
    orderInfo.paymentInfo = paymentInfo
    orderInfo.cartItems = cartItems.value
    orderInfo.totalPrice = totalPrice.value

    cartItems.value = []
    router.push('/confirmation')
  }

  return {
    orderInfo,
    shippingInfo,
    paymentInfo,
    makeOrder,
  }
}
