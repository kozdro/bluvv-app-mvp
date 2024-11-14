import { ref } from 'vue'

const isAuthenticated = ref(false)
const totalEarnings = ref(0)

export default () => {
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const login = () => {
    if (email.value === process.env.LOGIN_MAIL && password.value === process.env.LOGIN_PASSWORD) {
      isAuthenticated.value = true
      errorMessage.value = ''
    } else {
      errorMessage.value = 'Invalid email or password. Please try again.'
    }
  }
  
  const logout = () => {
    isAuthenticated.value = false
    email.value = ''
    password.value = ''
  }

  return {
    isAuthenticated,
    totalEarnings,
    email,
    password,
    errorMessage,
    login,
    logout,
  }
}
