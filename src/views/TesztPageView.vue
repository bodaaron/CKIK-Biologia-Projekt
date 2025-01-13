<script lang="ts" setup>
import { useGetAdatok } from '@/api/kep/kepQuery';
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const kep = ref<string>('');
kep.value = String(route.params.tesztId);

const adat = ref<number>();
adat.value = Number(route.params.id)

const {data:adatok,isLoading} = useGetAdatok(Number(adat.value))

</script>
<template>
    <v-img :src="`/public/kepek/${kep}.jpg`"></v-img>
    {{ adatok }}
</template>