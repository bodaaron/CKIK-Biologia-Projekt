<script lang="ts" setup>
import type { LoginParam } from '@/api/auth/auth'
import { useLogin } from '@/api/auth/authQuery'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const visible = ref(false)
const { push } = useRouter()

const loginParam = ref<LoginParam>({
  email: '',
  jelszo: '',
})

const error = ref<string | null>(null)
const error2 = ref<string | null>(null)

const { mutate: login, isPending } = useLogin()

const handleLogin = () => {
  error.value = null
  login(loginParam.value, {
    onError: (err: any) => {
      error.value = err.response.data.error
      error2.value = err.response.data.error
    },
  })
}
</script>
<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title class="text-center">Biológia Weboldal</v-card-title>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        label="Email"
        v-model="loginParam.email"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="Jelszó"
        @click:append-inner="visible = !visible"
        v-model="loginParam.jelszo"
      ></v-text-field>

      <v-btn
        class="mb-8"
        size="large"
        variant="elevated"
        @click="handleLogin"
        :loading="isPending"
        block
      >
        Bejelentkezés
      </v-btn>

      <v-card-text
        class="text-center"
        @click="
          () => {
            push({ name: 'registration' })
          }
        "
      >
        <a class="text-green text-decoration-none" rel="noopener noreferrer">
          Regisztráció
          <v-icon icon="mdi-chevron-right"> </v-icon>
        </a>
      </v-card-text>
      <v-alert v-if="error" type="error" dismissible>
        {{ error }}
      </v-alert>
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
  /*background-color: #77c89d;*/
  background-color: #006663;
  color: #ece7e2;
}
</style>
