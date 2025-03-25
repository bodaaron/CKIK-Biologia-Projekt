<script lang="ts" setup>
import type { ChangeData, User } from '@/api/profile/profile'
import { usechange, useDeleteUser, useGetKepek, useGetLoggedUser, useGetUserek, useGiveJogToUser, useTakeJogFromUser, } from '@/api/profile/profileQuery'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { getTsBuildInfoEmitOutputFilePath } from 'typescript'
import type { ComputedRefSymbol } from '@vue/reactivity'
import { useGetAdatok } from '@/api/kep/kepQuery'
import type {DiaknakFeleletData, Felelet, OsztalynakFeleletData, Valaszok, } from '@/api/felelet/felelet'
import { useDiakFelelet, useGetDiakFeleletek, useGetValaszok, useKijavitas, } from '@/api/felelet/feleletQuery'
import type { Adat } from '@/api/kep/kep'

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
const { mutate: diakFelelet } = useDiakFelelet()
const { mutate: deleteUser } = useDeleteUser()
const { mutate: giveJogToUser } = useGiveJogToUser()
const { mutate: takeJogFromUser } = useTakeJogFromUser()
const { mutateAsync: getDiakFeleletek } = useGetDiakFeleletek()
const { mutateAsync: getValaszok } = useGetValaszok()
const { mutateAsync: getAdatok } = useGetAdatok()
const { mutateAsync: kijavitas } = useKijavitas()
const { push } = useRouter()

const userData = ref<ChangeData>({
  id: 0,
  nev: '',
  email: '',
  osztaly: '',
})

const osztalyTesztData = ref<OsztalynakFeleletData>({
  selectedTeszt: undefined as unknown as number,
  selectedOsztaly: '',
  feleletMod: undefined as unknown as boolean,
})

const diakTesztData = ref<DiaknakFeleletData>({
  diakId: 0,
  tanarId: 0,
  kepId: undefined as unknown as number,
  feleletMod: undefined as unknown as boolean,
})

const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const dialog5 = ref(false)
const dialog6 = ref(false)
const dialog7 = ref(false)
const dialog8 = ref(false)
const dialog9 = ref(false)
const dialog10 = ref(false)
const alertModal = ref(false)
const selectedOsztaly = ref<string | null>(null)
const selectedDiak = ref<string | null>(null)
const selectedTesztOsztaly = ref<string | null>(null)
const selectedTeszt = ref<string | null>(null)
const selectedDeleteDiakId = ref<number | null>(null)
const selectedJogosultsagDiakId = ref<number | null>(null)
const feleletek = ref<Felelet[]>([])
const valaszok = ref<Valaszok[]>([])
const adatok = ref<Adat[]>([])
const eltunt = ref(false)
const feleletMod = ref(null)
const kivalTesztId = ref<number>()
const kivalTesztTeszId = ref<number>()
const LogUser = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = LogUser.jogosultsag
const message = ref<string | null>(null)

const items4 = ref([
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

const handleKitoltClick = (id: number, tesztId: number) => {
  dialog10.value = true
  kivalTesztId.value = id
  kivalTesztTeszId.value = tesztId
}

const handleKitoltes = async () => {
  const isValid = await v$4.value.$validate()
  if (isValid) {
    sessionStorage.setItem('exist', '1')
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

const handleGyakorloKitoltes = async () => {
  dialog.value = true
}

const handleUserek = async () => {
  dialog2.value = true
  feltolt()
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
  feleletMod: { required: helpers.withMessage('Felelet mód kiválasztása kötelező', required) },
}

const tesztRulesDiak = {
  kepId: { required: helpers.withMessage('Teszt kiválasztása kötelező', required) },
  feleletMod: { required: helpers.withMessage('Felelet mód kiválasztása kötelező', required) },
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

var items2 = [{ nev: '', id: 0 }]

const items3 = ref([
  { text: 'Választós', value: 0 },
  { text: 'Saját válasz', value: 1 },
])

const v$ = useVuelidate(rules, userData.value)
const v$2 = useVuelidate(tesztRulesOsztaly, osztalyTesztData)
const v$3 = useVuelidate(tesztRulesDiak, diakTesztData)
const v$4 = useVuelidate(tesztKioltRules, { feleletMod })

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
          message.value =
            'Sikeres adatmódosítás! E-mail cím megváltoztatás után újra be kell jelentkezni!'
          alertModal.value = true
          localStorage.clear()
          setTimeout(() => {
            push('/home')
          }, 2000)
        } else {
          message.value = 'Sikeres adatmódosítás!'
          alertModal.value = true
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      },
    })
  }
}

const handleMegtekintes = async (id: number, fajlnev: number) => {
  sessionStorage.setItem('exist', '1')
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
const kivalasztottOsztaly = ref<User[]>([])

const feltolt = async () => {
  if (!users.value) return

  filteredUsers.value = users.value
  filteredUsers.value = filteredUsers.value.filter((user) => user.id !== data.value?.id)
}
const nameSearch = ref('')

const handleTesztKiosztOsztaly = async () => {
  dialog3.value = true
  if (!kepek.value) return
  items2 = kepek.value.map((item) => ({ nev: item.nev, id: item.id }))
}

const handleTesztKiosztDiak = async (nev: string, id: number) => {
  dialog4.value = true
  selectedDiak.value = nev
  diakTesztData.value.diakId = id
  if (!kepek.value) return
  items2 = kepek.value.map((item) => ({ nev: item.nev, id: item.id }))
}

const handleKiosztOsztalyDB = async () => {
  const isValid = await v$2.value.$validate()

  console.log(osztalyTesztData.value.selectedOsztaly)
  if (isValid) {
    if (!users.value) return
    kivalasztottOsztaly.value = users.value.filter(
      (user) => osztalyTesztData.value.selectedOsztaly == user.osztaly && user.jogosultsag == 0,
    )
  }

  Object.entries(kivalasztottOsztaly.value).forEach(async ([key, value]) => {
    var diak: DiaknakFeleletData = {
      diakId: value.id,
      kepId: osztalyTesztData.value.selectedTeszt,
      feleletMod: osztalyTesztData.value.feleletMod,
      tanarId: Number(data.value?.id),
    }
    await diakFelelet(diak)
  })
  message.value = 'Felelet sikeresen kiosztva az osztálynak!'
  dialog3.value = false
  alertModal.value = true
}

const handleKiosztDiakDB = async () => {
  const isValid = await v$3.value.$validate()

  diakTesztData.value.tanarId = Number(data.value?.id)

  if (isValid) {
    await diakFelelet(diakTesztData.value, {
      onSuccess() {
        message.value = 'Felelet sikeresen kiosztva!'
        dialog4.value = false
        alertModal.value = true
      },
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
  filteredUsers.value = filteredUsers.value.filter((user) => user.id !== data.value?.id)

  if (filteredUsers.value.length == 0) {
    error2.value = 'Nincs ilyen felhasználó'
  }
}

const handleTorles = async (nev: string, id: number) => {
  dialog5.value = true
  selectedDiak.value = nev
  selectedDeleteDiakId.value = id
}

const handleTorlesIgen = async () => {
  deleteUser(Number(selectedDeleteDiakId.value))
  message.value = 'A felhasználó törölve lett!'
  alertModal.value = true
  setTimeout(() => {
    window.location.reload()
  }, 2000)
}

const handleJogosultsagAdas = async (nev: string, id: number) => {
  dialog6.value = true
  selectedDiak.value = nev
  selectedJogosultsagDiakId.value = id
}

const handleJogosultsagIgen = async () => {
  giveJogToUser(Number(selectedJogosultsagDiakId.value))
  message.value = 'A felhasználó mostantól rendelkezik tanári jogosultságokkal!'
  alertModal.value = true
  setTimeout(() => {
    window.location.reload()
  }, 2000)
}

const handleJogosultsagElvet = async (nev: string, id: number) => {
  dialog9.value = true
  selectedDiak.value = nev
  selectedJogosultsagDiakId.value = id
}

const handleJogosultsagElvetIgen = async () => {
  takeJogFromUser(Number(selectedJogosultsagDiakId.value))
  message.value = 'A felhasználó mostantól nem rendelkezik tanári jogosultságokkal!'
  alertModal.value = true
  setTimeout(() => {
    window.location.reload()
  }, 2000)
}

const handleUserFeleletek = async (id: number) => {
  dialog7.value = true
  feleletek.value = await getDiakFeleletek(id)
}

const handleValaszokMegtekint = async (id: Number, kepId: Number) => {
  dialog8.value = true
  valaszok.value = await getValaszok(Number(id))
  adatok.value = await getAdatok(Number(kepId))
}

const handleKijelentkezés = async () => {
  localStorage.clear()
  push({ name: 'home' })
}

const handleKijavitasDB = async () => {
  for (var i = 0; i < valaszok.value.length; i++) {
    kijavitas(valaszok.value[i])
  }
  message.value = 'A kipipált válaszok ellettek fogadva!'
  alertModal.value = true
}
</script>
<template>
  <v-btn @click="handleEltunes" class="hattergomb">Háttér megtekintése</v-btn>
  <v-container class="d-flex align-center justify-center fill-height bg-surface-variant">
    <v-card v-show="!eltunt" class="alul">
      <v-card-title class="tesztTitle"> Tanári Felület </v-card-title>
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
            v-if="userRole == 0"
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
        <v-container>
          <v-btn
            class="my-2"
            color="info"
            block
            variant="elevated"
            :loading="isPending"
            @click="handleUserek"
            >Felhasználók</v-btn
          >
          <v-btn
            class="my-2"
            color="info"
            block
            variant="elevated"
            :loading="isPending"
            @click="handleTesztKiosztOsztaly"
            >Felelet kiosztása osztálynak</v-btn
          >
          <v-btn
            class="my-2"
            color="info"
            block
            variant="elevated"
            :loading="isPending"
            @click="handleGyakorloKitoltes"
            >Gyakorló teszt kitöltés</v-btn
          >
          <v-btn
            class="my-2"
            color="info"
            block
            variant="elevated"
            :loading="isPending"
            @click="handleKijelentkezés"
            >Kijelentkezés</v-btn
          >
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>

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
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
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
      </v-card-actions>
      <v-card-actions>
        <v-alert v-if="error2" type="error">
          {{ error2 }}
        </v-alert>
      </v-card-actions>
      <v-table>
        <thead>
          <tr class="tablaFejResz">
            <th class="text-left">Név</th>
            <th class="text-left">E-mail cím</th>
            <th class="text-left">Osztály</th>
            <th class="text-left">Jogosultság</th>
            <th class="text-left">Műveletek</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.nev }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.jogosultsag === 1 ? 'Tanár' : user.osztaly }}</td>
            <td>{{ user.jogosultsag === 1 ? 'Tanár' : 'Tanuló' }}</td>
            <td>
              <v-btn
                v-if="user.jogosultsag == 0"
                class="ms-auto feleletGomb"
                text="Feleletek"
                @click="handleUserFeleletek(user.id)"
              ></v-btn>
              <v-btn
                v-if="user.jogosultsag == 0"
                class="ms-auto feleletKiosztGomb"
                text="Felelet kiosztása"
                @click="handleTesztKiosztDiak(user.nev, user.id)"
              ></v-btn>
              <v-btn
                v-if="user.jogosultsag == 0"
                class="ms-auto jogosultsagAdasGomb"
                text="Tanári jogosultság adása"
                @click="handleJogosultsagAdas(user.nev, user.id)"
              ></v-btn>
              <v-btn
                v-if="user.jogosultsag == 1"
                class="ms-auto jogosultsagAdasGomb"
                text="Tanári jogosultság elvétele"
                @click="handleJogosultsagElvet(user.nev, user.id)"
              ></v-btn>
              <v-btn
                class="ms-auto torlesGomb"
                text="Törlés"
                @click="handleTorles(user.nev, user.id)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog3" transition="dialog-bottom-transition" max-width="800">
    <v-card class="alul">
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
            item-title="nev"
            item-value="id"
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
          <v-select
            label="Teszt mód"
            :items="items3"
            v-model="osztalyTesztData.feleletMod"
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
                >A diáknak egy listából kell kiválasztania a jó válaszokat</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">Saját válasz</v-list-item-title>
              <v-list-item-subtitle
                >A diáknak saját magától kell megadnia a jó válaszokat</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-btn type="submit" class="hattergomb">Teszt kiosztása</v-btn>
      </v-form>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog4" transition="dialog-bottom-transition" max-width="500">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
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
          <v-select
            label="Teszt mód"
            :items="items3"
            v-model="diakTesztData.feleletMod"
            item-title="text"
            item-value="value"
            :error-messages="v$3.feleletMod.$errors.map((e) => String(e.$message))"
            @blur="v$3.feleletMod.$touch"
            @change="v$3.feleletMod.$touch"
            required
          >
          </v-select>
        </v-card-actions>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">Választós</v-list-item-title>
              <v-list-item-subtitle
                >A diáknak egy listából kell kiválasztania a jó válaszokat</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">Saját válasz</v-list-item-title>
              <v-list-item-subtitle
                >A diáknak saját magától kell megadnia a jó válaszokat</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-btn type="submit" class="hattergomb">Teszt kiosztása</v-btn>
      </v-form>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog5" transition="dialog-bottom-transition" max-width="500">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Törlés
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog5 = false"></v-btn>
      </v-card-title>
      <v-card-text> Bíztosan törölni szeretné {{ selectedDiak }} felhasználót? </v-card-text>
      <v-card-actions>
        <v-btn @click="handleTorlesIgen()" :loading="isPending" class="igenGomb">Igen</v-btn>
        <v-btn @click="dialog5 = false" class="nemGomb">Nem</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog6" transition="dialog-bottom-transition" max-width="700">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Jogosultság
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog6 = false"></v-btn>
      </v-card-title>
      <v-card-text>
        Bíztosan szeretne tanári jogosultságo adni {{ selectedDiak }} felhasználónak?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="handleJogosultsagIgen()" :loading="isPending" class="igenGomb">Igen</v-btn>
        <v-btn @click="dialog6 = false" class="nemGomb">Nem</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog7" transition="dialog-bottom-transition" fullscreen>
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Teszt kiválasztása
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog7 = false"></v-btn>
      </v-card-title>
      <v-table>
        <thead>
          <tr class="tablaFejResz">
            <th class="text-left">Név</th>
            <th class="text-left">Sorszám</th>
            <th class="text-left">Tanár</th>
            <th class="text-left">Kitöltve</th>
            <th class="text-left">Műveletek</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="felelet in feleletek" :key="felelet.id" v-if="kepek">
            <td>{{ kepek.find((k) => k.id == felelet.kepId)?.nev }}</td>
            <td>{{ kepek.find((k) => k.id == felelet.kepId)?.fajlnev }}</td>
            <td>{{ users?.find((u) => u.id == felelet.tanarId)?.nev }}</td>
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
                v-if="felelet.kitoltesDatum != null"
                class="ms-auto hattergomb"
                text="Válaszok megtekintése"
                @click="handleValaszokMegtekint(felelet.id, felelet.kepId)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-dialog>

  <v-dialog max-width="500" v-model="dialog8" transition="dialog-bottom-transition" fullscreen>
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Válaszok
        <v-spacer></v-spacer>
        <v-tooltip text="Minden kipipált válasz ellesz fogadva">
          <template v-slot:activator="{ props }">
            <v-btn class="hattergomb" v-bind="props" @click="handleKijavitasDB()">Kijavítás</v-btn>
          </template>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog8 = false"></v-btn>
      </v-card-title>
      <v-table>
        <thead>
          <tr class="tablaFejResz">
            <th class="text-left">Sorszám</th>
            <th class="text-left">Helyes válasz</th>
            <th class="text-left">Felhasználó válasza</th>
            <th class="text-left">Elfogadva</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(valasz, index) in valaszok" :key="valasz.id">
            <td>{{ adatok[index].adatSorszam }}</td>
            <td>{{ adatok[index].helyesValasz }}</td>
            <td>{{ valasz.valasz || 'Nem adott választ' }}</td>
            <td><v-checkbox v-model="valasz.elfogadotte">Elfogadás</v-checkbox></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog9" transition="dialog-bottom-transition" max-width="700">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Jogosultság
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog9 = false"></v-btn>
      </v-card-title>
      <v-card-text>
        Bíztosan szeretné {{ selectedDiak }} tanári jogosultságait elvenni??
      </v-card-text>
      <v-card-actions>
        <v-btn @click="handleJogosultsagElvetIgen()" :loading="isPending" class="igenGomb"
          >Igen</v-btn
        >
        <v-btn @click="dialog9 = false" class="nemGomb">Nem</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog10" transition="dialog-bottom-transition" max-width="500">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle"
        >Teszt mód kiválasztása
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="dialog10 = false"></v-btn>
      </v-card-title>
      <v-form @submit.prevent="handleKitoltes()">
        <v-card-actions>
          <v-select
            label="Teszt mód"
            :items="items4"
            v-model="feleletMod"
            item-title="text"
            item-value="value"
            :error-messages="v$4.feleletMod.$errors.map((e) => String(e.$message))"
            @blur="v$4.feleletMod.$touch"
            @change="v$4.feleletMod.$touch"
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

  <v-dialog v-model="alertModal" transition="dialog-bottom-transition" max-width="500">
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle">
        Értesítés
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" @click="alertModal = false"></v-btn>
      </v-card-title>
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
.tablaFejResz {
  font-style: oblique;
  color: black;
}
.feleletKiosztGomb {
  background-color: #e65100;
  color: #fff3e0;
}
.jogosultsagAdasGomb {
  background-color: #1976d2;
  color: #e3f2fd;
}
.igenGomb {
  color: #1976d2;
}
.nemGomb {
  color: #558b2f;
}
</style>
