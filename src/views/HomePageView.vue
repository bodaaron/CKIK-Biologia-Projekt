<script lang="ts" setup>
import type { LoginParam } from '@/api/auth/auth';
import { useLogin } from '@/api/auth/authQuery';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const {push}= useRouter()

const loginParam = ref<LoginParam>({
    email: '',
    jelszo: ''
})


const {mutate: login, isPending} = useLogin()

</script>
<template>
    <v-card>
        <v-card-title>Belépés</v-card-title>
        <v-card-text>
            <v-text-field v-model="loginParam.email" label="Email" variant="outlined"></v-text-field>
            <v-text-field v-model="loginParam.jelszo" label="Jelszó" variant="outlined" type="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn color="info" variant="elevated" @click=" async() => {
                 login(loginParam)
            }" :loading="isPending">
                Belépés
            </v-btn>
            <!-- <v-btn @click="() => {
                push({name: 'forgotten-password'})
            }">
            Elfelejtett jelszó
            </v-btn> -->
            <v-btn @click="() => {
                push({name: 'registration'})
            }">
            Regisztráció
            </v-btn>
        </v-card-actions>
    </v-card>
</template>