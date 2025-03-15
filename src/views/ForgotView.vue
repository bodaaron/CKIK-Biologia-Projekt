<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useGetUserek } from '@/api/profile/profileQuery'

const email = ref('')
const message = ref('')
const loading = ref(false)
const { push } = useRouter()
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
  setTimeout(() => push({ name: 'home' }), 3000)
}
</script>

<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card class="v-card">
      <v-card-title class="v-card-title">Problémája van a bejelentkezéssel?</v-card-title>
      <v-card-subtitle>Kérjük, adja meg e-mail címét!</v-card-subtitle>

      <v-text-field
        v-model="email"
        label="Add meg az e-mail címet"
        type="email"
        class="v-text-field"
      />

      <v-btn :disabled="loading" @click="sendEmail" class="v-btn">
        {{ loading ? 'Küldés...' : 'E-mail küldése' }}
      </v-btn>

      <p v-if="message">{{ message }}</p>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card {
  background-color: #e0f2f1;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
}

.v-card-title {
  color: #009688;
}

.v-card-subtitle {
  margin-bottom: 15px;
  color: #004d40;
}

.v-text-field {
  margin-bottom: 15px;
}

.v-btn {
  background-color: #006663;
  color: #ece7e2;
}

.v-btn:disabled {
  background-color: #cccccc;
}

p {
  margin-top: 10px;
  color: #333;
}
</style>
