<script lang="ts" setup>
import { useGetLoggedUser } from '@/api/profile/profileQuery';


const {data} = useGetLoggedUser()
</script>
<template>
    <v-card>
        <v-card-title>
            Profile
        </v-card-title>
        <v-card-text>
            Név: {{ data?.nev }}
            <br>
            Email: {{ data?.email }}
            <br>
            Email: {{ data?.osztaly }}
            <br>
        </v-card-text>
        <v-card-actios>
            <v-btn>CRUD</v-btn>
        </v-card-actios>
    </v-card>


</template>