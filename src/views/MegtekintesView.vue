<script lang="ts" setup>
import type { Adat } from '@/api/kep/kep';
import { useGetAdatok } from '@/api/kep/kepQuery';
import { useGetKepek } from '@/api/profile/profileQuery';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const {mutateAsync: getAdatok} = useGetAdatok();
const { data: kepek, isLoading } = useGetKepek()

const kep = ref<string>('');
kep.value = String(route.params.fajlnev);

const adat = ref<number>();
adat.value = Number(route.params.id);


const title = ref<string | undefined>('');
title.value = kepek.value?.find((kep) => kep.id == adat.value)?.nev

const adatok = ref<Adat[]>([]);
const {back, push} = useRouter();

const imgElement = ref<HTMLImageElement | null>(null);
const areas = ref<any[]>([]);
const naturalWidth = ref<number | null>(null);
const naturalHeight = ref<number | null>(null);
const dialog2 = ref(false);
const kivalasztottErtek = ref<string>('');


const updateAreas = () => {
  if (!imgElement.value || !adatok.value || !naturalHeight.value || !naturalWidth.value) return;

  const currentWidth = imgElement.value.clientWidth;
  const currentHeight = imgElement.value.clientHeight;
  const scaleX = currentWidth / naturalWidth.value;
  const scaleY = currentHeight / naturalHeight.value;

  areas.value = adatok.value.map((item: any) => ({
    shape: 'circle',
    coords: `${item.x * scaleX},${item.y * scaleY},${item.size * scaleX}`,
    ertek: item.helyesValasz
  }));
  console.log(areas.value);
};

onMounted(async () => {
  adatok.value = await getAdatok(Number(adat.value));
    if(!imgElement.value) return
 

  const handleImageLoad = () => {
    if (imgElement.value?.naturalWidth === 3024) {
      naturalWidth.value = 1748;
      naturalHeight.value = 2331;
    } else if (imgElement.value?.naturalWidth === 4032) {
      naturalWidth.value = 1748;
      naturalHeight.value = 1311;
    }
    updateAreas();
  };

  if (imgElement.value.complete) {
    handleImageLoad();
  } 
  else {
    imgElement.value.addEventListener("load", handleImageLoad);
  }
});

watchEffect(() => {
  const handleResize = () => updateAreas();
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});


const handleClick = (area: any) => {
  kivalasztottErtek.value = area.ertek
  dialog2.value = true;
};

document.onclick = function(e){
  if(!imgElement.value) return
  const rect = imgElement.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  console.log("X is "+x+" and Y is "+y);
};

const handleBack = () =>{
  push({name:'home'})
  sessionStorage.setItem('exist','0')
}

const handleNincsIlyen = () =>{
  push({name:'tanulo'})
}

</script>

<template>
  <v-container>
    <v-card class="alul">
    <v-card-title class="text-center tesztTitle">{{ title }}</v-card-title>
      <img
        :src="`/public/kepek/tesztKepek/${kep}.jpg`"
        ref="imgElement"
        usemap="#dynamic-map"
        style="max-width: 100%; height: auto;"
        @error="handleNincsIlyen"
      />
      <map name="dynamic-map">
        <area
          v-for="(area, index) in areas"
          :key="index"
          :shape="area.shape"
          :coords="area.coords"
          :ertek="area.ertek"
          :href="''"
          @click.prevent="handleClick(area)"
        />
      </map>
      <v-card-actions>
        <v-btn
          class="mb-8 hattergomb"
          size="large"
          variant="elevated"
          block
          @click="handleBack()">
          Vissza a főoldalra
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

    <v-dialog max-width="500" v-model="dialog2" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="d-flex">Kép előnézet
        <v-spacer ></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="dialog2 = false"
        ></v-btn>
      </v-card-title>
      <v-card-text>
        {{ kivalasztottErtek }}
      </v-card-text>
    </v-card>
  </v-dialog>

</template>
<style scoped>

.hattergomb{
  background-color: #006663;
  color: #ece7e2;
}
.v-container{
background-color: #009688;
border: #006663 solid 10px;
}
.alul{
  background-color: #e0f2f1;
}
.tesztTitle{
  color: #009688;
  background-color: #e0f2f1;
}
</style>