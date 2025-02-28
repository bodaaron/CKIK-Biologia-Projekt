<script lang="ts" setup>
import type { ChangeData, User } from '@/api/profile/profile'
import { usechange, useGetKepek, useGetLoggedUser, useGetUserek } from '@/api/profile/profileQuery'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { getTsBuildInfoEmitOutputFilePath } from 'typescript'
import type { ComputedRefSymbol } from '@vue/reactivity'
import { useGetAdatok } from '@/api/kep/kepQuery'
import type { DiaknakFeleletData, OsztalynakFeleletData } from '@/api/felelet/felelet'
import { useDiakFelelet } from '@/api/felelet/feleletQuery'

const slides = [
  '../public/kepek/delfin.jpg',
  '../public/kepek/bagoly.jpg',
  '../public/kepek/teknos.jpg',
  '../public/kepek/labdasdelfin.jpg',
  '../public/kepek/meduza.jpg',
  '../public/kepek/kacsa.jpg',
  '../public/kepek/siraly.jpg',
  '../public/kepek/zsolti.jpg',
]

const { data } = useGetLoggedUser()
const { data: kepek, isLoading } = useGetKepek()
const { data: users } = useGetUserek()
const { mutate: change, isPending } = usechange()
const { mutate: diakFelelet} = useDiakFelelet()
const { push } = useRouter()

const userData = ref<ChangeData>({
  id: 0,
  nev: '',
  email: '',
  osztaly: '',
})

const osztalyTesztData = ref<OsztalynakFeleletData>({
  selectedTeszt: '',
  selectedOsztaly: '',
})

const diakTesztData = ref<DiaknakFeleletData>({
  diakId: 0,
  tanarId: 0,
  kepId: undefined as unknown as number,
})

const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const selectedOsztaly = ref<string | null>(null)
const selectedDiak = ref<string | null>(null)
const selectedTesztOsztaly = ref<string | null>(null)
const selectedTeszt = ref<string | null>(null)
const kivalasztottKep = ref<number | null>(null)
const eltunt = ref(false)

watchEffect(() => {
  if (data.value) {
    userData.value.id == data.value?.id || 0
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

const handleUserek = async () => {
  dialog2.value = true
  feltolt()
}

const handleKitoltClick = (id: number, tesztId: number) => {
  push({ name: 'teszt', params: { id: id, tesztId: tesztId } })
}

const rules = {
  nev: { required: helpers.withMessage('Név megadása kötelező!', required) },
  email: {
    email: helpers.withMessage('Kérjük, adjon meg egy érvényes email címet!', email),
    required: helpers.withMessage('Email cím megadása kötelező!', required),
  },
  osztaly: { required: helpers.withMessage('Kérjük, válasszon egy osztályt!', required) },
}

const tesztRulesOsztaly = {
  selectedOsztaly: { required: helpers.withMessage('Osztály kiválasztása kötelező!', required) },
  selectedTeszt: { required: helpers.withMessage('Teszt kiválasztása kötelező', required) },
}

const tesztRulesDiak = {
  kepId: { required: helpers.withMessage('Teszt kiválasztása kötelező', required) },
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

var items2 = [ {nev:'',id:0}]

const v$ = useVuelidate(rules, userData.value)
const v$2 = useVuelidate(tesztRulesOsztaly, osztalyTesztData)
const v$3 = useVuelidate(tesztRulesDiak, diakTesztData)

const error = ref<string | null>(null)
const error2 = ref<string | null>(null)

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
          alert('Sikeres adatmódosítás! E-mail cím megváltoztatás után újra be kell jelentkezni!')
          push({ name: 'home' })
        } else {
          alert('Sikeres adatmódosítás!')
          window.location.reload()
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

const filteredUsers = ref<User[]>([])

const feltolt = async () => {
  if (!users.value) return
  
  filteredUsers.value = users.value
}
const nameSearch = ref('')
const nameTesztSearch = ref('')

const handleTesztKiosztOsztaly = async () => {
  dialog3.value = true
  if(!kepek.value) return
  items2 = kepek.value.map(item => ({ nev: item.nev, id: item.id }));
}

const handleTesztKiosztDiak = async (nev: string,id: number) => {
  dialog4.value = true
  selectedDiak.value = nev
  diakTesztData.value.diakId = id;
  if(!kepek.value) return
  items2 = kepek.value.map(item => ({ nev: item.nev, id: item.id }));
}

const handleKiosztOsztalyDB = async () => {
  const isValid = await v$2.value.$validate()

  if (isValid) {
  }

  // if (isValid) {
  //   await change(userData.value, {
  //     onError: (err: any) => {
  //       error.value = err.response.data.error
  //       if (userData.value.email !== data.value?.email) {
  //         userData.value.email = String(data.value?.email)
  //       }
  //     },
  //     onSuccess() {
  //       if (userData.value.email !== data.value?.email) {
  //         alert('Sikeres adatmódosítás! E-mail cím megváltoztatás után újra be kell jelentkezni!')
  //         push({ name: 'home' })
  //       } else {
  //         alert('Sikeres adatmódosítás!')
  //         window.location.reload()
  //       }
  //     },
  //   })
  // }
}

const handleKiosztDiakDB = async () => {
  const isValid = await v$3.value.$validate()

  diakTesztData.value.tanarId = Number(data.value?.id);

  if (isValid) {
    await diakFelelet(diakTesztData.value,{
      onSuccess(){
        alert('Felelet sikeresen kiosztva!')
        dialog4.value = false;
      }
    })
  }
}

const handleKereses = async () => {
  error2.value = ''
  if (!users.value) return
  filteredUsers.value = users.value.filter((user) => {
    const classMatches = selectedOsztaly.value ? user.osztaly === selectedOsztaly.value : true

    const nameMatches = nameSearch.value
      ? user.nev.toLowerCase().includes(nameSearch.value.toLowerCase())
      : true

    return classMatches && nameMatches
  })

  if (filteredUsers.value.length == 0) {
    error2.value = 'Nincs ilyen felhasználó'
  }
}
</script>
<template>
  <v-btn @click="handleEltunes" class="hattergomb">Háttér megtekintése</v-btn>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card v-show="!eltunt">
      <v-card-title> Tanári Felület </v-card-title>
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
        <v-btn color="info" variant="elevated" :loading="isPending" @click="handleUserek"
          >Felhasználók</v-btn
        >
        <v-btn
          color="info"
          variant="elevated"
          :loading="isPending"
          @click="handleTesztKiosztOsztaly"
          >Felelet kiosztása osztálynak</v-btn
        >
        <v-btn color="info" variant="elevated" :loading="isPending" @click="handleGyakorloKitoltes"
          >Gyakorló teszt kitöltés</v-btn
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
            <tr>
              <th class="text-left">Név</th>
              <th class="text-left">Sorszám</th>
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
      <v-card>
        <v-card-title class="d-flex"
          >Felhasználók
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog2 = false"></v-btn>
        </v-card-title>
        <v-card-actions>
          <v-select
            label="Keresés osztály alapján"
            :items="items"
            v-model="selectedOsztaly"
            @blur="handleKereses"
          ></v-select>
          <v-text-field
            label="Keresés név alapján"
            v-model="nameSearch"
            @input="handleKereses"
          ></v-text-field>
          <v-alert v-if="error2" type="error" dismissible>
            {{ error2 }}
          </v-alert>
        </v-card-actions>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Név</th>
              <th class="text-left">E-mail cím</th>
              <th class="text-left">Osztály</th>
              <!-- <th class="text-left">Jogosultság</th> -->
              <th class="text-left">Műveletek</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td>{{ user.nev }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.osztaly }}</td>
              <!-- <td>{{ user.jogosultsag }}</td> -->
              <td>
                <v-btn
                  class="ms-auto feleletGomb"
                  text="Feleletek"
                  @click="handleUserFeleletek(user.id)"
                ></v-btn>
                <v-btn
                  class="ms-auto torlesGomb"
                  text="Felelet kiosztása"
                  @click="handleTesztKiosztDiak(user.nev,user.id)"
                ></v-btn>
                <v-btn
                  class="ms-auto torlesGomb"
                  text="Törlés"
                  @click="handleTorles(user.id)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" transition="dialog-bottom-transition" max-width="500">
      <v-card>
        <v-card-title class="d-flex"
          >Felelet kiosztása osztálynak
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog3 = false"></v-btn>
        </v-card-title>
        <v-form @submit.prevent="handleKiosztOsztalyDB">
          <v-card-actions>
            <v-select
              label="Kiosztható tesztek"
              :items="items2"
              :error-messages="v$2.selectedTeszt.$errors.map((e) => String(e.$message))"
              v-model="osztalyTesztData.selectedTeszt"
              @blur="v$2.selectedTeszt.$touch"
              @change="v$2.selectedTeszt.$touch"
              required
            ></v-select>
            <v-select
              label="Osztály választása"
              :items="items"
              v-model="osztalyTesztData.selectedOsztaly"
              :error-messages="v$2.selectedOsztaly.$errors.map((e) => String(e.$message))"
              @blur="v$2.selectedOsztaly.$touch"
              @change="v$2.selectedOsztaly.$touch"
              required
            ></v-select>
          </v-card-actions>
          <v-btn type="submit">Teszt kiosztása</v-btn>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog4" transition="dialog-bottom-transition" max-width="500">
      <v-card>
        <v-card-title class="d-flex"
          >Felelet kiosztása {{ selectedDiak }} tanulónak
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="dialog4 = false"></v-btn>
        </v-card-title>
        <v-form @submit.prevent="handleKiosztDiakDB">
          <v-card-actions>
            <v-select
              label="Kiosztható tesztek"
              :items="items2"
              v-model="diakTesztData.kepId"
              item-title="nev"
              item-value="id"
              :error-messages="v$3.kepId.$errors.map((e) => String(e.$message))"
              @blur="v$3.kepId.$touch"
              @change="v$3.kepId.$touch"
              required
            ></v-select>
          </v-card-actions>
          <v-btn type="submit">Teszt kiosztása</v-btn>
        </v-form>
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
.torlesGomb {
  background-color: #b71c1c;
  color: #ffebee;
}
.feleletGomb {
  background-color: #2e8b57;
  color: #dcedc8;
}
</style>
