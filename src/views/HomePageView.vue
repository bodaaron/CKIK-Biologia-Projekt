<script lang="ts" setup>
import type { LoginParam } from '@/api/auth/auth'
import { useLogin } from '@/api/auth/authQuery'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { push } = useRouter()

const loginParam = ref<LoginParam>({
  email: '',
  jelszo: '',
})

const error = ref<string | null>(null)

const { mutate: login, isPending } = useLogin()

const handleLogin = () => {
  error.value = null
  login(loginParam.value, {
    onError: (err: any) => {
      error.value = err.response.data.error
    },
  })
}
</script>
<template>
  <v-card>
    <v-card-title class="font-weight-black">Belépés</v-card-title>
    <v-card-text>
      <v-alert v-if="error" type="error" dismissible>
        {{ error }}
      </v-alert>
      <v-text-field v-model="loginParam.email" label="Email" variant="outlined"></v-text-field>
      <v-text-field
        v-model="loginParam.jelszo"
        label="Jelszó"
        variant="outlined"
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="info" variant="elevated" @click="handleLogin" :loading="isPending">
        Belépés
      </v-btn>
      <!-- <v-btn @click="() => {
                push({name: 'forgotten-password'})
            }">
            Elfelejtett jelszó
            </v-btn> -->
      <v-btn
        @click="
          () => {
            push({ name: 'registration' })
          }
        "
      >
        Regisztráció
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.v-card-title {
  color: #009688;
}
</style>
