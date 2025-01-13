<script lang="ts" setup>
import type { ChangeData } from '@/api/profile/profile';
import { usechange, useGetLoggedUser } from '@/api/profile/profileQuery';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required} from '@vuelidate/validators';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import type { ComputedRefSymbol } from '@vue/reactivity';


const {data} = useGetLoggedUser()
const { mutate: change, isPending} = usechange()
const {push} = useRouter();

const userData = ref<ChangeData>({
  id: Number(localStorage.getItem("id")),
  nev: '',
  email: '',
  osztaly: '',
});

const dialog = ref(false);
const kepek = ref<string[]>(['64','63']);
const kivalasztottKep = ref<number | null>(null);
const kivalasztottKep2 = ref<string>('');


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

const handleImageClick = (index: number,image: string) => {
  kivalasztottKep.value = index;
  kivalasztottKep2.value = image;
};

const handleKitoltClick = () =>{
  push({name: "teszt", params:{tesztId:kivalasztottKep2.value}})
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
        error.value =  err.response.data.error;
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

    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-title>Image Gallery</v-card-title>
                <v-row>
                    <v-col
                        v-for="(image, index) in kepek"
                        :key="index"
                        cols="12" sm="4" md="4">
                        <v-img :src="'kepek/'+image+'.jpg'" :alt="'Image' + index" @click="handleImageClick(index,image)" :class="{'selected-image': kivalasztottKep === index}"></v-img>
                    </v-col>
                </v-row>
        <template v-slot:actions>
            <v-btn v-if="kivalasztottKep != null"
              class="ms-auto"
              text="Kitöltés"
              @click="handleKitoltClick"
            ></v-btn>
          <v-btn
            class="ms-auto"
            text="Bezárás"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>

</template>

<style scoped>
.selected-image {
  border: 4px solid #007bff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.6);
  transition: all 0.3s ease;
}

.v-img:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style> 