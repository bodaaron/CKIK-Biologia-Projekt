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



document.onclick = function(e){
  var x = e.pageX;
  var y = e.pageY;
  console.log("X is "+x+" and Y is "+y);
};


</script>
<template>
    <img :src="`/public/kepek/${kep}.jpg`" usemap="#dynamic-map" style="max-width: 100%; height: auto;"></img>
    <map name="dynamic-map">
      <area
        v-for="(area, index) in areas"
        :key="index"
        :shape="area.shape"
        :coords="area.coords"
        :href="'https://www.youtube.com/watch?v=V4REaV-Fy2A'"
        @click.prevent="handleClick(area)"
      />
    </map>
</template>