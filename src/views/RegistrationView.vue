<script lang="ts" setup>
import type { RegistrationData } from '@/api/auth/auth'
import { useRegistration } from '@/api/auth/authQuery'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required, sameAs } from '@vuelidate/validators'
import { computed, reactive, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const registrationDataRef = ref<RegistrationData>({
  nev: '',
  email: '',
  jelszo: '',
  jelszoMeg: '',
  osztaly: '',
})
const visible = ref(false)
const { mutate: registration, isPending } = useRegistration()

const show1 = ref(false)
const show2 = ref(false)

const { push } = useRouter()

const rules = {
  nev: { required: helpers.withMessage('Név megadása kötelező!', required) },
  email: {
    email: helpers.withMessage('Kérjük, adjon meg egy érvényes email címet!', email),
    required: helpers.withMessage('Email cím megadása kötelező!', required),
  },
  osztaly: { required: helpers.withMessage('Kérjük, válasszon egy osztályt!', required) },
  jelszo: { required: helpers.withMessage('Jelszó megadása kötelező!', required) },
  jelszoMeg: {
    required: helpers.withMessage('Jelszó megerősítése kötelező!', required),
    sameAsJelszo: helpers.withMessage('A két jelszó nem egyezik!',sameAs(computed(()=> registrationDataRef.value.jelszo)))},
}

const items = [
  '13.A',
  '13.B',
  '13.C',
  '13.K',
  '12.A',
  '12.B',
  '12.C',
  '11.A',
  '11.B',
  '11.C',
  '10.A',
  '10.B',
  '10.C',
  '9.A',
  '9.B',
  '9.C',
]

const v$ = useVuelidate(rules, registrationDataRef.value)

const error = ref<string | null>(null)

const handleRegistration = async () => {
  error.value = null
  const isValid = await v$.value.$validate()

  if (isValid) {
    await registration(registrationDataRef.value, {
      onError: async (err: any) => {
        error.value = await err.response.data.error
      },
      onSuccess() {
        // Sikeres regisztráció után átirányítjuk a felhasználót a home oldalra
        push({ name: 'home' })
      },
    })
  }
}

</script>
<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-card-title class="text-center">Regisztráció</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleRegistration">
          <v-text-field
          v-model="registrationDataRef.nev"
          :error-messages="v$.nev.$errors.map((e) => String(e.$message))"
          :counter="40"
          label="Név"
          required
          @blur="v$.nev.$touch"
          @input="v$.nev.$touch"
          variant="outlined"
          density="compact"
          prepend-inner-icon="mdi-account-outline"
          ></v-text-field>
          
          <v-text-field
          v-model="registrationDataRef.email"
          :error-messages="v$.email.$errors.map((e) => String(e.$message))"
          label="Email"
          required
          @blur="v$.email.$touch"
          @input="v$.email.$touch"
          density="compact"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          ></v-text-field>
          
          <v-text-field
          v-model="registrationDataRef.jelszo"
          :error-messages="v$.jelszo.$errors.map((e) => String(e.$message))"
          label="Jelszó"
          required
          :type="show1 ? 'text' : 'password'"
          @blur="v$.jelszo.$touch"
          @input="v$.jelszo.$touch"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="show1 = !show1"
          ></v-text-field>
          
          <v-text-field
          v-model="registrationDataRef.jelszoMeg"
          :error-messages="v$.jelszoMeg.$errors.map((e) => String(e.$message))"
          label="Jelszó megerősítés"
          required
          :type="show2 ? 'text' : 'password'"
          @blur="v$.jelszoMeg.$touch"
          @input="v$.jelszoMeg.$touch"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="show2 = !show2"
          ></v-text-field>

          <v-select
          v-model="registrationDataRef.osztaly"
          :error-messages="v$.osztaly.$errors.map((e) => String(e.$message))"
          label="Osztály"
          :items="items"
          required
          @blur="v$.osztaly.$touch"
          @change="v$.osztaly.$touch"
          density="compact"
          variant="outlined"
          ></v-select>
          
          <v-card-actions>
            <v-btn
            class="mb-8"
            size="large"
            variant="elevated"
            :loading="isPending"
            type="submit"
            block
            >
            Regisztráció
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
    <v-alert v-if="error" type="error" dismissible>
      {{ error }}
    </v-alert>
    <v-card-text
    class="text-center"
    @click="() => {push({ name: 'home' })}">
        <a class="text-green text-decoration-none" rel="noopener noreferrer">
          Már van fiókom
          <v-icon icon="mdi-chevron-right"> </v-icon>
        </a>
      </v-card-text>
      <v-card-text
        class="text-center"
        @click="
          () => {
            push({ name: 'home' })
          }
        "
      >
        <a class="text-green text-decoration-none" rel="noopener noreferrer">
          Ha már van fiókja itt bejelentkezhet
          <v-icon icon="mdi-chevron-right"> </v-icon>
        </a>
      </v-card-text>
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
