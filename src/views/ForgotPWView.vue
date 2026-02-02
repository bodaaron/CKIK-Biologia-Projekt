<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useGetUserek } from '@/api/profile/profileQuery'
import { useRouter } from 'vue-router'

const email = ref('')
const error1 = ref<string | null>(null)
const success = ref<string | null>(null)
const loading = ref(false)
const { data: users } = useGetUserek()
const { push } = useRouter()

const sendEmail = async () => {
  if (!email.value) {
    error1.value = 'Kérjük, adjon meg egy e-mail címet!'
    return
  }
  if(!users.value) return
  const userExists = users.value.some((user) => user.email === email.value)

  if (!userExists) {
    error1.value = 'Ez az e-mail cím nem található a rendszerben.'
    return
  }

  loading.value = true
  error1.value = ''

  try {
    const response = await axios.post('/api/send-email', {
      email: email.value,
    })

    if(response.data.success){
      success.value =  response.data.message
    }

  } catch (error : any) {
    error1.value =
      'Hiba történt az e-mail küldése során: ' + (error.response?.data?.error || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title class="text-center">Elfelejtett jelszó</v-card-title>
          <v-text-field v-model="email" type="email"   density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined" label="Kérjük addja meg az e-mail címét"/>
          <v-alert class="mb-2" v-if="error1" type="error" dismissible> {{ error1 }} </v-alert>
          <v-alert class="mb-2" v-if="success" type="success" icon="mdi-check-circle"> {{ success }} </v-alert>
          <v-card-actions class="d-flex flex-column">
            <v-btn class="mb-2" size="large" variant="elevated" :disabled="loading" @click="sendEmail" block>
              {{ loading ? 'Küldés...' : 'E-mail küldése' }}
            </v-btn>
            <v-btn  class="mb-8" size="large" variant="elevated" @click="push({name: 'home'})" block>Vissza</v-btn>
          </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>

.v-card-title {
  color: #009688;
}
.v-card {
  background-color: #e0f2f1;
  width: 100%;
}
.v-text-field {
  color: #004d40;
}
.v-btn {
  background-color: #006663;
  color: #ece7e2;
}
</style>
