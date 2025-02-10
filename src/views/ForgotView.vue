<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useGetUserek } from '@/api/profile/profileQuery'

const email = ref('')
const message = ref('')
const loading = ref(false)
const { data: users } = useGetUserek()

const sendEmail = async () => {
  if (!email.value) {
    message.value = 'Kérlek, adj meg egy e-mail címet!'
    return
  }
  const userExists = users.value.some((user) => user.email === email.value)

  if (!userExists) {
    message.value = 'Ez az e-mail cím nem található a rendszerben.'
    return
  }

  loading.value = true
  message.value = ''

  try {
    const response = await axios.post('http://localhost:3000/send-email', {
      email: email.value,
    })

    message.value = response.data.message
  } catch (error) {
    message.value =
      'Hiba történt az e-mail küldése során: ' + (error.response?.data?.error || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <h2>E-mail küldő</h2>
    <input v-model="email" type="email" placeholder="Add meg az e-mail címet" />
    <button :disabled="loading" @click="sendEmail">
      {{ loading ? 'Küldés...' : 'E-mail küldése' }}
    </button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:disabled {
  background-color: #ccc;
}

p {
  margin-top: 10px;
  color: #333;
}
</style>
