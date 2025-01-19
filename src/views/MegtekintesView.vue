<script lang="ts" setup>
import { useGetAdatok } from '@/api/kep/kepQuery';
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const kep = ref<string>('');
kep.value = String(route.params.fajlnev);

const adat = ref<number>();
adat.value = Number(route.params.id)

const {data:adatok,isLoading} = useGetAdatok(Number(adat.value))

const areas = computed(() => {
  if (!adatok.value) return [];
  return adatok.value.map((item: any) => ({
    shape: "circle",
    coords: `${item.x},${item.y},${item.size}`,
  }));
});

const handleClick = (area: any) => {
    alert("WOWZA");
};

</script>
<template>
    <v-img :src="`/public/kepek/${kep}.jpg`" usemap="#dynamic-map"></v-img>
    <map name="dynamic-map">
      <area
        v-for="(area, index) in areas"
        :key="index"
        :shape="area.shape"
        :coords="area.coords"
        @click.prevent="handleClick(area)"
      />
    </map>
<!-- 
    <img src="/public/kepek/64.jpg" usemap="#image-map">

    <map name="image-map">
        <area target="" alt="" title="" href="" coords="2619,861,55" shape="circle">
    </map> -->
</template>