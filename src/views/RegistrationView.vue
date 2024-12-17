<script lang="ts" setup>
import type { RegistrationData } from '@/api/auth/auth';
import { useRegistration } from '@/api/auth/authQuery';
import { ref } from 'vue';

const registrationDataRef = ref<RegistrationData>({
    name: '',
    email: '',
    neptun_code: ''
})

const { mutate: registration, isPending} = useRegistration()

</script>
<template>
    <v-card>
        <v-card-title>Regisztráció</v-card-title>
        <v-card-text>
            <v-text-field v-model="registrationDataRef.name" label="Név" variant="outlined"></v-text-field>
            <v-text-field v-model="registrationDataRef.email" label="Email cím" variant="outlined"></v-text-field>
            <v-text-field v-model="registrationDataRef.neptun_code" label="Osztály" variant="outlined"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="() => {
                registration(registrationDataRef)
            }" :loading="isPending">
                Regisztráció
            </v-btn>
        </v-card-actions>
    </v-card>
</template>