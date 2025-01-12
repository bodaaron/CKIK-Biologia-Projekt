<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';


// const {data} = ()
const route = useRoute();

const kep = ref<string>('');
kep.value = String(route.params.tesztId);

</script>
<template>
    <v-img :src="'kepek/'+kep+'.jpg'"></v-img>
</template>