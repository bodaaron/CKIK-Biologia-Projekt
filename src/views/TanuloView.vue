<script lang="ts" setup>
import type { ChangeData } from '@/api/profile/profile';
import { usechange, useGetKepek, useGetLoggedUser } from '@/api/profile/profileQuery';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required} from '@vuelidate/validators';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import type { ComputedRefSymbol } from '@vue/reactivity';


const {data} = useGetLoggedUser()
const {data: kepek, isLoading} = useGetKepek()
const { mutate: change, isPending} = usechange()
const {push} = useRouter();

const userData = ref<ChangeData>({
  id: Number(localStorage.getItem("id")),
  nev: '',
  email: '',
  osztaly: '',
});

const dialog = ref(false);
const dialog2 = ref(false);
const kivalasztottKep = ref<number | null>(null);


watchEffect(() => {
  if (data.value) {
    userData.value.nev = data.value.nev || '';
    userData.value.email = data.value.email || '';
    userData.value.osztaly = data.value.osztaly || '';
  }
});

const hasChanges = computed(() => {
  return userData.value.nev !== data.value?.nev ||
         userData.value.email !== data.value?.email ||
         userData.value.osztaly !== data.value?.osztaly;
});

const handleGyakorloKitoltes = async () => {
    dialog.value = true;
};

const handleKitoltClick = (id:number,tesztId:number) =>{
  push({name: "teszt", params:{id:id,tesztId:tesztId}})
};

const rules = {
    nev: { required: helpers.withMessage('Név megadása kötelező!', required) },
    email: { 
        email: helpers.withMessage('Kérjük, adjon meg egy érvényes email címet!', email),
        required: helpers.withMessage('Email cím megadása kötelező!', required)
    },
    osztaly: { required: helpers.withMessage('Kérjük, válasszon egy osztályt!', required) },
};

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

const v$ = useVuelidate(rules, userData.value);

const error = ref<string | null>(null);

error.value = null;

const handleChange = async () => {
    error.value = null;
    const isValid = await v$.value.$validate();
  
    if (isValid) {
        await change(userData.value,{
        onError: (err: any) => {
        error.value = err.response.data.error;
          if(userData.value.email !== data.value?.email){
            userData.value.email = String(data.value?.email)
          }
        },
        onSuccess(){
          if(userData.value.email !== data.value?.email){
            alert('Sikeres adatmódosítás! E-mail cím megváltoztatás után újra be kell jelentkezni!')
            push({name: "home" })
          }
          else{
            alert('Sikeres adatmódosítás!');
            window.location.reload();
          }
        }
      });
    }  
};

const handleMegtekintes = async (id: number) =>{
    dialog2.value = true;
    kivalasztottKep.value = id;
}

</script>
<template>
    <v-card>
        <v-card-title>
            Tanulói Felület
        </v-card-title>
        <v-card-text>
          <v-alert v-if="error" type="error" dismissible>
                {{ error }}
            </v-alert>  
            <v-form @submit.prevent="handleChange">
                <v-text-field
                v-model="userData.nev"
                :error-messages="v$.nev.$errors.map(e => String(e.$message))"
                :counter="40"
                label="Név"
                required
                @blur="v$.nev.$touch"
                @input="v$.nev.$touch"
                ></v-text-field>

                <v-text-field
                v-model="userData.email" 
                :error-messages="v$.email.$errors.map(e => String(e.$message))"
                label="Email"
                required
                @blur="v$.email.$touch"
                @input="v$.email.$touch"
                ></v-text-field>

                <v-select 
                v-model="userData.osztaly"
                :error-messages="v$.osztaly.$errors.map(e => String(e.$message))"
                label="Osztály" 
                :items="items"
                required
                @blur="v$.osztaly.$touch"
                @change="v$.osztaly.$touch"
                ></v-select>
                <v-btn v-if="hasChanges":loading="isPending"  type="submit">Adatok módosítása</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn>Teszt kitöltés</v-btn>
              <v-btn color="info" variant="elevated" :loading="isPending" @click="handleGyakorloKitoltes">Gyakorló teszt kitöltés</v-btn>
        </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-card-title class="d-flex">Teszt kiválasztása
          <v-spacer ></v-spacer>
          <v-btn
            icon="mdi-close"
            @click="dialog = false"
          ></v-btn>
        </v-card-title>
        <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Név
          </th>
          <th class="text-left">
            Sorszám
          </th>
          <th class="text-left">
            Műveletek
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="kep in kepek":key="kep.id">
          <td>{{ kep.nev }}</td>
          <td>{{ kep.fajlnev }}</td>
          <td>
          <v-btn class="ms-auto" text="Kitöltés" @click="handleKitoltClick(kep.id,kep.fajlnev)"></v-btn>
          <v-btn class="ms-auto" text="Megtekintés" @click="handleMegtekintes(kep.fajlnev)"></v-btn>
          </td>
        </tr>
      </tbody>
      </v-table>  
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialog2" transition="dialog-bottom-transition" fullscreen>
    <v-card>
      <v-card-title class="d-flex">Kép előnézet
        <v-spacer ></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="dialog2 = false"
        ></v-btn>
      </v-card-title>
      <v-card-text>
        <v-img :src="'kepek/'+kivalasztottKep+'.jpg'"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>