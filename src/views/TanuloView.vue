<script lang="ts" setup>
import type { ChangeData } from '@/api/profile/profile'
import { usechange, useGetKepek, useGetLoggedUser, useGetUserek } from '@/api/profile/profileQuery'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { getTsBuildInfoEmitOutputFilePath } from 'typescript'
import type { ComputedRefSymbol } from '@vue/reactivity'
import { useGetAdatok } from '@/api/kep/kepQuery'
import { useGetDiakFeleletek, useGetValaszok } from '@/api/felelet/feleletQuery'
import type { Felelet, Valaszok } from '@/api/felelet/felelet'
import type { UseQueryReturnType } from '@tanstack/vue-query'

const slides = [
  '../public/kepek/hatter/delfin.jpg',
  '../public/kepek/hatter/bagoly.jpg',
  '../public/kepek/hatter/teknos.jpg',
  '../public/kepek/hatter/labdasdelfin.jpg',
  '../public/kepek/hatter/meduza.jpg',
  '../public/kepek/hatter/kacsa.jpg',
  '../public/kepek/hatter/siraly.jpg',
  '../public/kepek/hatter/zsolti.jpg',
]

const { data } = useGetLoggedUser()
const { data: kepek, isLoading } = useGetKepek()
const { data: users } = useGetUserek()
const { mutate: change, isPending } = usechange()
const { push } = useRouter()
const { mutateAsync: getValaszok } = useGetValaszok()
const valaszok = ref<Valaszok[]>([])
const { mutateAsync: getDiakFeleletek } = useGetDiakFeleletek()
const feleletek = ref<Felelet[]>([])
const feleletMod = ref(null)
const kivalTesztId = ref<number>()
const kivalTesztTeszId = ref<number>()
const message = ref<string | null>(null)

const userData = ref<ChangeData>({
  id: 0,
  nev: '',
  email: '',
  osztaly: '',
})

const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const dialog5 = ref(false)
const eltunt = ref(false)

const items2 = ref([
  { text: 'Választós', value: 0 },
  { text: 'Saját válasz', value: 1 },
])

watchEffect(() => {
  if (data.value) {
    userData.value.id = data.value.id || 0
    userData.value.nev = data.value.nev || ''
    userData.value.email = data.value.email || ''
    userData.value.osztaly = data.value.osztaly || ''
  }
})

const hasChanges = computed(() => {
  return (
    userData.value.id !== data.value?.id ||
    userData.value.nev !== data.value?.nev ||
    userData.value.email !== data.value?.email ||
    userData.value.osztaly !== data.value?.osztaly
  )
})

const handleGyakorloKitoltes = async () => {
  dialog.value = true
}

const handleKitoltClick = (id: number, tesztId: number) => {
  dialog4.value = true
  kivalTesztId.value = id
  kivalTesztTeszId.value = tesztId
}

const handleKitoltes = async () => {
  const isValid = await v$2.value.$validate()
  if (isValid) {
    push({
      name: 'teszt',
      params: {
        id: kivalTesztId.value,
        tesztId: kivalTesztTeszId.value,
        tesztMod: feleletMod.value,
      },
    })
  }
}

const handleKitoltFeleletClick = (
  id: number,
  tesztId: number,
  feleletId: number,
  tesztMod: number,
) => {
  push({
    name: 'felelet',
    params: { id: id, tesztId: tesztId, feleletId: feleletId, tesztMod: tesztMod },
  })
}

const rules = {
  nev: { required: helpers.withMessage('Név megadása kötelező!', required) },
  email: {
    email: helpers.withMessage('Kérjük, adjon meg egy érvényes email címet!', email),
    required: helpers.withMessage('Email cím megadása kötelező!', required),
  },
  osztaly: { required: helpers.withMessage('Kérjük, válasszon egy osztályt!', required) },
}

const tesztKioltRules = {
  feleletMod: { required: helpers.withMessage('Teszt mód kiválasztása kötelező', required) },
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

const v$ = useVuelidate(rules, userData.value)
const v$2 = useVuelidate(tesztKioltRules, { feleletMod })

const error = ref<string | null>(null)

error.value = null

const handleChange = async () => {
  error.value = null
  const isValid = await v$.value.$validate()

  if (isValid) {
    await change(userData.value, {
      onError: (err: any) => {
        error.value = err.response.data.error
        if (userData.value.email !== data.value?.email) {
          userData.value.email = String(data.value?.email)
        }
      },
      onSuccess() {
        if (userData.value.email !== data.value?.email) {
          message.value =
            'Sikeres adatmódosítás! E-mail cím megváltoztatás után újra be kell jelentkezni!'
          dialog5.value = true
          localStorage.clear()
          setTimeout(() => {
            push('/home')
          }, 2000)
        } else {
          message.value = 'Sikeres adatmódosítás!'
          dialog5.value = true
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      },
    })
  }
}

const handleMegtekintes = async (id: number, fajlnev: number) => {
  push({ name: 'megtekintes', params: { id: id, fajlnev: fajlnev } })
}

const handleEltunes = async () => {
  if (eltunt.value == false) {
    eltunt.value = true
  } else {
    eltunt.value = false
  }
}

const handleTesztKitoltes = async () => {
  dialog2.value = true
  feleletek.value = await getDiakFeleletek(Number(data.value?.id))
  console.log(feleletek)
}

const handleValaszokMegtekint = async (id: Number) => {
  dialog3.value = true
  valaszok.value = await getValaszok(Number(id))
}

const handleKijelentkezés = async () => {
  localStorage.clear()
  push({ name: 'home' })
}
</script>
<template>
  <v-btn @click="handleEltunes" class="hattergomb">Háttér megtekintése</v-btn>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card v-show="!eltunt" class="alul">
      <v-card-title class="tesztTitle"> Tanulói Felület </v-card-title>
      <v-card-text>
        <v-alert v-if="error" type="error" dismissible>
          {{ error }}
        </v-alert>
        <v-form @submit.prevent="handleChange">
          <v-text-field
            v-model="userData.nev"
            :error-messages="v$.nev.$errors.map((e) => String(e.$message))"
            :counter="40"
            label="Név"
            required
            @blur="v$.nev.$touch"
            @input="v$.nev.$touch"
          ></v-text-field>

          <v-text-field
            v-model="userData.email"
            :error-messages="v$.email.$errors.map((e) => String(e.$message))"
            label="Email"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
          ></v-text-field>

          <v-select
            v-model="userData.osztaly"
            :error-messages="v$.osztaly.$errors.map((e) => String(e.$message))"
            label="Osztály"
            :items="items"
            required
            @blur="v$.osztaly.$touch"
            @change="v$.osztaly.$touch"
          ></v-select>
          <v-btn v-if="hasChanges" :loading="isPending" type="submit">Adatok módosítása</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="info" variant="elevated" :loading="isPending" @click="handleTesztKitoltes"
          >Teszt kitöltés</v-btn
        >
        <v-btn color="info" variant="elevated" :loading="isPending" @click="handleGyakorloKitoltes"
          >Gyakorló teszt kitöltés</v-btn
        >
        <v-btn color="info" variant="elevated" :loading="isPending" @click="handleKijelentkezés"
          >Kijelentkezés</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card class="alul">
        <v-card-title class="d-flex tesztTitle"
          >Teszt kiválasztása
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
        </v-card-title>
        <v-table>
          <thead>
            <tr class="tablaFejResz">
              <th class="text-left">Név</th>
              <th class="text-left">Kép sorszám</th>
              <th class="text-left">Műveletek</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="kep in kepek" :key="kep.id">
              <td>{{ kep.nev }}</td>
              <td>{{ kep.fajlnev }}</td>
              <td>
                <v-btn
                  class="ms-auto kitoltes"
                  text="Kitöltés"
                  @click="handleKitoltClick(kep.id, kep.fajlnev)"
                ></v-btn>
                <v-btn
                  class="ms-auto megtekintes"
                  text="Megtekintés"
                  @click="handleMegtekintes(kep.id, kep.fajlnev)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" transition="dialog-bottom-transition" fullscreen>
      <v-card class="alul">
        <v-card-title class="d-flex tesztTitle"
          >Teszt kiválasztása
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog2 = false"></v-btn>
        </v-card-title>
        <v-table>
          <thead>
            <tr class="tablaFejResz">
              <th class="text-left">Név</th>
              <th class="text-left">Kép sorszám</th>
              <th class="text-left">Tanár</th>
              <th class="text-left">Teszt mód</th>
              <th class="text-left">Kitöltve</th>
              <th class="text-left">Műveletek</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="felelet in feleletek" :key="felelet.id" v-if="kepek">
              <td>{{ kepek.find((k) => k.id == felelet.kepId)?.nev }}</td>
              <td>{{ kepek.find((k) => k.id == felelet.kepId)?.fajlnev }}</td>
              <td>{{ users?.find((u) => u.id == felelet.tanarId)?.nev }}</td>
              <td>{{ felelet.feleletMod === true ? 'Saját válasz' : 'Választós' }}</td>
              <td>
                {{
                  felelet.kitoltesDatum
                    ? new Date(felelet.kitoltesDatum).toLocaleString('hu-HU', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Ez a felelet még nincs kitöltve'
                }}
              </td>
              <td>
                <v-btn
                  v-if="felelet.kitoltesDatum == null"
                  class="ms-auto kitoltes"
                  text="Kitöltés"
                  @click="
                    handleKitoltFeleletClick(
                      Number(kepek.find((k) => k.id == felelet.kepId)?.id),
                      Number(kepek.find((k) => k.id == felelet.kepId)?.fajlnev),
                      Number(felelet.id),
                      Number(felelet.feleletMod),
                    )
                  "
                ></v-btn>
                <v-btn
                  v-if="felelet.kitoltesDatum != null"
                  class="ms-auto"
                  text="Válaszok megtekintése"
                  @click="handleValaszokMegtekint(felelet.id)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-dialog>

    <v-dialog max-width="500" v-model="dialog3" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-card-title class="d-flex"
          >Válaszok
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog3 = false"></v-btn>
        </v-card-title>
        <v-table>
          <thead class="tablaFejResz">
            <tr>
              <th class="text-left">Sorszám</th>
              <th class="text-left">Válaszod</th>
              <th class="text-left">Elfogadva</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(valasz, index) in valaszok" :key="valasz.id">
              <td>{{ index + 1 }}</td>
              <td>{{ valasz.valasz || 'Nem adtál választ' }}</td>
              <td>
                {{
                  valasz.elfogadotte === 1
                    ? 'Elfogadott'
                    : valasz.elfogadotte === 0
                      ? 'Nem elfogadott'
                      : valasz.elfogadotte === null
                        ? 'Még nem lett kijavítva'
                        : ''
                }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog4" transition="dialog-bottom-transition" max-width="500">
      <v-card class="alul">
        <v-card-title class="d-flex tesztTitle"
          >Teszt mód kiválasztása
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog4 = false"></v-btn>
        </v-card-title>
        <v-form @submit.prevent="handleKitoltes()">
          <v-card-actions>
            <v-select
              label="Teszt mód"
              :items="items2"
              v-model="feleletMod"
              item-title="text"
              item-value="value"
              :error-messages="v$2.feleletMod.$errors.map((e) => String(e.$message))"
              @blur="v$2.feleletMod.$touch"
              @change="v$2.feleletMod.$touch"
              required
            >
            </v-select>
          </v-card-actions>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title class="font-weight-bold">Választós</v-list-item-title>
                <v-list-item-subtitle
                  >Egy listából kell kiválasztanod a jó válaszokat</v-list-item-subtitle
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="font-weight-bold">Saját válasz</v-list-item-title>
                <v-list-item-subtitle
                  >Saját magadtól kell megadnod a jó válaszokat</v-list-item-subtitle
                >
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit" class="hattergomb">Kitöltés</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog5" transition="dialog-bottom-transition" max-width="500">
      <v-card>
        <v-card-text>
          {{ message }}
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-carousel
      class="full-background-carousel behind"
      :show-arrows="false"
      cycle
      hide-delimiter-background
      height="100%"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet
          :style="{
            backgroundImage: 'url(' + slide + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          height="100%"
        >
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<style scoped>
.behind {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hattergomb,
.v-card,
.v-container {
  z-index: 1;
}
.tesztTitle {
  color: #009688;
  background-color: #e0f2f1;
}
.kitoltes {
  background-color: #800020;
  color: #ece7e2;
}
.megtekintes {
  background-color: #2e8b57;
  color: #ece7e2;
}
.v-table {
  background-color: #558b2f;
  color: #ece7e2;
}
.alul {
  background-color: #e0f2f1;
}
.hattergomb {
  background-color: #006663;
  color: #ece7e2;
}
.tablaFejResz {
  font-style: oblique;
  color: black;
}
</style>
