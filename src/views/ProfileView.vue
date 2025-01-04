<script lang="ts" setup>
import { ChangeData } from '@/api/profile/profile';
import { usechange, useGetLoggedUser } from '@/api/profile/profileQuery';
import { computed, ref, watchEffect } from 'vue';


const {data} = useGetLoggedUser()
const { mutate: change, isPending} = usechange()

const userData = ref<ChangeData>({
  nev: '',
  email: '',
  osztaly: '',
});

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


const rules = {
    required: (value: string) => !!value || 'Kötelező',
    counter: (value: string) => value.length <= 20 || 'Max 60 karakter',
    email: (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Hibás E-mail cím.';
    }
};

</script>
<template>
    <v-card>
        <v-card-title>
            Tanulói Felület
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field 
                v-model="userData.nev" 
                label="Név" 
                variant="outlined" 
                :rules="[rules.required]"
                ></v-text-field>
                
                <v-text-field 
                v-model="userData.email" 
                label="E-mail cím" 
                variant="outlined" 
                :rules="[rules.required, rules.email]"
                ></v-text-field>
                
                <v-select 
                label="Osztály" 
                v-model="userData.osztaly" 
                :items="['13.B', '13.C', '13.A', '13.K']" 
                :rules="[rules.required]"
                ></v-select>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn>Teszt kitöltés</v-btn>
            <v-btn>Gyakorló teszt kitöltés</v-btn>
            <v-btn v-if="hasChanges" @click="() => { change(userData) }" 
                :loading="isPending"  type="submit">>Adatok módosítása</v-btn>
        </v-card-actions>
    </v-card>


</template>