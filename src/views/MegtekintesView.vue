<script lang="ts" setup>
import type { Adat } from '@/api/kep/kep';
import { useGetAdatok } from '@/api/kep/kepQuery';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const {mutateAsync: getAdatok} = useGetAdatok();

const kep = ref<string>('');
kep.value = String(route.params.fajlnev);

const adat = ref<number>();
adat.value = Number(route.params.id);


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
};

onMounted(async () => {
  adatok.value = await getAdatok(Number(adat.value))
  if (!imgElement.value) return;

  imgElement.value?.addEventListener('load', () => {
    if(imgElement.value?.naturalWidth == 3024){
      naturalWidth.value = 1903;
      naturalHeight.value = 2537;
    }
    else if(imgElement.value?.naturalWidth == 4032){
      console.log(imgElement.value.clientWidth);
      console.log(imgElement.value.clientHeight);
      naturalWidth.value = 1903;
      naturalHeight.value = 1427;
    }
    updateAreas();
  }); 
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
  var x = e.pageX;
  var y = e.pageY;
  console.log("X is "+x+" and Y is "+y);
  console.log(areas);
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
    <v-card>
      <img
        :src="`/public/kepek/tesztKepek/${kep}.jpg`"
        ref="imgElement"
        usemap="#dynamic-map"
        style="max-width: 100%; height: auto;"
        @error="handleNincsIlyen"
      />
      <v-card-actions>
        <v-btn
          class="mb-8"
          size="large"
          variant="elevated"
          block
          @click="handleBack()">
          Vissza a főoldalra
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
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
