import { ref } from 'vue'

const isAuthenticated = ref(false)
const totalEarnings = ref(0)

export default () => {
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const login = () => {
    if (email.value === 'test.user@gmail.com' && password.value === 'testPassword') {
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
