<script lang="ts" setup>
import type { RegistrationData } from '@/api/auth/auth';
import { useRegistration } from '@/api/auth/authQuery';
import { ref } from 'vue';

const registrationDataRef = ref<RegistrationData>({
    nev: '',
    email: '',
    jelszo: '',
    osztaly: ''
})

const { mutate: registration, isPending} = useRegistration()

const show1 = ref(false);

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
        <v-card-title>Regisztráció</v-card-title>
        <v-card-text>
            <v-form fast-fail @submit.prevent>
                <v-text-field 
                v-model="registrationDataRef.nev" 
                label="Név" 
                variant="outlined" 
                :rules="[rules.required]"
                ></v-text-field>
                
                <v-text-field 
                v-model="registrationDataRef.email" 
                label="E-mail cím" 
                variant="outlined" 
                :rules="[rules.required, rules.email]"
                ></v-text-field>
                
                <v-text-field 
                v-model="registrationDataRef.jelszo" 
                label="Jelszó" 
                variant="outlined" 
                :type="show1 ? 'text' : 'password'" 
                :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'" 
                @click:append="show1 = !show1" 
                :rules="[rules.required]"
                ></v-text-field>
                
                <v-select 
                label="Osztály" 
                v-model="registrationDataRef.osztaly" 
                :items="['13.B', '13.C', '13.A', '13.K']" 
                :rules="[rules.required]"
                ></v-select>

                <v-card-actions>
                    <v-btn 
                    @click="() => { registration(registrationDataRef) }" 
                    :loading="isPending"  type="submit">
                    Regisztráció
                </v-btn>
            </v-card-actions>
                </v-form>
            </v-card-text>
            
    </v-card>
</template>