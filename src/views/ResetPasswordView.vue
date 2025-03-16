<script lang="ts" setup>
import { jwtDecode } from 'jwt-decode'
import { ref } from 'vue'
import type { JelszoValtoztato } from '@/api/profile/profile'
import { UseJelszoValtoztatas } from '@/api/profile/profileQuery'
import { useRoute, useRouter } from 'vue-router'

const visible = ref(false)
const { push } = useRouter()
const route = useRoute()
const token = route.params.token

const jelszoValtoztatoData = ref<JelszoValtoztato>({
  email: '',
  jelszo: '',
})

const newPassword = ref<string>('')
const confirmPassword = ref<string>('')
const error = ref<string | null>(null)
const dialog = ref(false);
const { mutate: jelszoValtoztatas, isPending } = UseJelszoValtoztatas()

const decode = () => {
  const decoded = jwtDecode<{ email: string }>(String(token))
  jelszoValtoztatoData.value.email = decoded.email
}

decode()

const handlePasswordReset = () => {
  error.value = null
  if (!newPassword.value || !confirmPassword.value) {
    error.value = 'Minden mezőt ki kell tölteni.'
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'A jelszavak nem egyeznek.'
    return
  }
  jelszoValtoztatoData.value.jelszo = newPassword.value
  jelszoValtoztatas(jelszoValtoztatoData.value, {
    onSuccess: () => {
      dialog.value = true
      setTimeout(() => {
        push('/home')
      }, 2000)
    },
    onError: (err: any) => {
      error.value = err.response.data.error
    },
  })
}
</script>

<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title class="text-center">Jelszó visszaállítás</v-card-title>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="Új jelszó"
        @click:append-inner="visible = !visible"
        v-model="newPassword"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="Jelszó megerősítése"
        @click:append-inner="visible = !visible"
        v-model="confirmPassword"
      ></v-text-field>

      <v-btn
        class="mb-8"
        size="large"
        variant="elevated"
        @click="handlePasswordReset"
        :loading="isPending"
        block
      >
        Jelszó visszaállítása
      </v-btn>

      <v-alert v-if="error" type="error" dismissible>
        {{ error }}
      </v-alert>
    </v-card>
  </v-container>

  <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="500">
      <v-card>
        <v-card-text>
          Sikeres jelszóváltoztatás!
        </v-card-text>
      </v-card>
    </v-dialog>
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
