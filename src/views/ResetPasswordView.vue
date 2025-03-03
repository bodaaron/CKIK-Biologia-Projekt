<script lang="ts" setup>
import { jwtDecode } from 'jwt-decode'
import axiosClient from '@/lib/axios'
import { ref } from 'vue'
import type { JelszoValtoztato } from '@/api/profile/profile'
import { UseJelszoValtoztatas } from '@/api/profile/profileQuery'
import { useRoute } from 'vue-router'

const JelszoValtoztatoData = ref<JelszoValtoztato>({
  email: '',
  jelszo: '',
})

const route = useRoute()

const { mutate: jelszoValtoztatas } = UseJelszoValtoztatas()
const newPassword = ref<string | null>(null)
const confirmPassword = ref<string | null>(null)
const email = ref<string | null>(null)
const token = route.params.token
const visible = ref(false)

const decode = () => {
  const decoded = jwtDecode(String(token))
  email.value = decoded.email
}

decode()

const handlePasswordReset = () => {
  if (newPassword.value != confirmPassword.value) {
    alert('A jelszavak nem egyeznek')
    return
  } else {
    JelszoValtoztatoData.value.email = String(email.value)
    JelszoValtoztatoData.value.jelszo = String(newPassword.value)
    jelszoValtoztatas(JelszoValtoztatoData.value)
  }
}
</script>
<template>
  <v-card>
    <v-card-title>Jelszó visszaállítás</v-card-title>
    <v-form @submit.prevent="handlePasswordReset">
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="Jelszó"
        @click:append-inner="visible = !visible"
        v-model="newPassword"
      ></v-text-field>
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="Jelszó"
        @click:append-inner="visible = !visible"
        v-model="confirmPassword"
      ></v-text-field>
      <v-card-actions>
        <v-btn type="submit">Jelszó visszaállítása</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
