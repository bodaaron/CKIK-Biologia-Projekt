<script lang="ts" setup>
import type { RegistrationData } from '@/api/auth/auth';
import { useRegistration } from '@/api/auth/authQuery';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required} from '@vuelidate/validators';
import { reactive, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const registrationDataRef = ref<RegistrationData>({
    nev: '',
    email: '',
    jelszo: '',
    osztaly: ''
})

// const state = reactive({
//   nev: registrationDataRef,
//   email: registrationDataRef,
//   jelszo: registrationDataRef,
//   osztaly: registrationDataRef,
// })

const { mutate: registration, isPending} = useRegistration()

const show1 = ref(false);

const {push} = useRouter()

const rules = {
    nev: { required: helpers.withMessage('Név megadása kötelező!', required) },
    email: { 
        email: helpers.withMessage('Kérjük, adjon meg egy érvényes email címet!', email),
        required: helpers.withMessage('Email cím megadása kötelező!', required)
    },
    osztaly: { required: helpers.withMessage('Kérjük, válasszon egy osztályt!', required) },
    jelszo: { required: helpers.withMessage('Jelszó megadása kötelező!', required) },
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

const v$ = useVuelidate(rules, registrationDataRef.value);

const error = ref<string | null>(null);

const handleRegistration = async () => {
    error.value = null;
    const isValid = await v$.value.$validate();
  
    if (isValid) {
        await registration(registrationDataRef.value,{
        onError: (err: any) => {
        error.value =  err.response.data.error;

        if(error.value == null){  
        alert('Sikeres regisztráció!');
        push({name: 'home'});
        }
        
        }});
    }   
};


</script>
<template>
    <v-card>
        <v-card-title>Regisztráció</v-card-title>
        <v-card-text>
            <v-alert v-if="error" type="error" dismissible>
                {{ error }}
            </v-alert>  
            <v-form @submit.prevent="handleRegistration">
                <v-text-field
                v-model="registrationDataRef.nev"
                :error-messages="v$.nev.$errors.map(e => String(e.$message))"
                :counter="40"
                label="Név"
                required
                @blur="v$.nev.$touch"
                @input="v$.nev.$touch"
                ></v-text-field>

                <v-text-field
                v-model="registrationDataRef.email" 
                :error-messages="v$.email.$errors.map(e => String(e.$message))"
                label="Email"
                required
                @blur="v$.email.$touch"
                @input="v$.email.$touch"
                ></v-text-field>
                
                <v-text-field 
                v-model="registrationDataRef.jelszo" 
                :error-messages="v$.jelszo.$errors.map(e => String(e.$message))"
                label="Jelszó" 
                required
                :type="show1 ? 'text' : 'password'" 
                :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'" 
                @click:append="show1 = !show1" 
                @blur="v$.jelszo.$touch"
                @input="v$.jelszo.$touch"
                ></v-text-field>
                
                <v-select 
                v-model="registrationDataRef.osztaly"
                :error-messages="v$.osztaly.$errors.map(e => String(e.$message))"
                label="Osztály" 
                :items="items"
                required
                @blur="v$.osztaly.$touch"
                @change="v$.osztaly.$touch"
                ></v-select>

                <v-card-actions>
                    <v-btn :loading="isPending" type="submit">
                    Regisztráció
          </v-btn>
            </v-card-actions>
        </v-form>
    </v-card-text>
    
</v-card>
</template>