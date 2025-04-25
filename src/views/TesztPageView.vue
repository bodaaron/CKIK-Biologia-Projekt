<script lang="ts" setup>
import type { Adat } from '@/api/kep/kep';
import { useGetAdatok } from '@/api/kep/kepQuery';
import { useGetKepek } from '@/api/profile/profileQuery';
import bcrypt from 'bcryptjs';
import { computed, nextTick, onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();

const { push, back } = useRouter()
const {mutateAsync: getAdatok} = useGetAdatok();
const { data: kepek, isLoading } = useGetKepek()


const kep = ref<string>('');  
kep.value = String(route.params.tesztId);

const adat = ref<number>();
adat.value = Number(route.params.id);

const tesztMod = ref<number>();
tesztMod.value = Number(route.params.tesztMod)

const title = computed(() => kepek.value?.find((kep) => kep.id == adat.value)?.nev);


const adatok = ref<Adat[]>([]);


const imgElement = ref<HTMLImageElement | null>(null);
const areas = ref<any[]>([]);
const naturalWidth = ref<number | null>(null);
const naturalHeight = ref<number | null>(null);
const dialog2 = ref(false);
const dialog3 = ref(false);
const vegeredmeny = ref(false);
const activeArea = ref<any>(null);
const answers = ref<Record<string, string>>({});  
const answer = ref<string>('');
var items2 = [ {helyesValasz:'',id:0}]

const updateAnswers = () => {
  if (!adatok.value) return;
  adatok.value.forEach((item: any) => {
    answers.value[item.id] = "";
  });
};

const handleAnswerChange = (newAnswer: string) => {
  if (activeArea.value) {
    answers.value[activeArea.value.id] = newAnswer;
  }
};

const updateAreas = () => {
  if (!imgElement.value || !adatok.value || !naturalHeight.value || !naturalWidth.value) return;

  const currentWidth = imgElement.value.clientWidth;
  const currentHeight = imgElement.value.clientHeight;

  const scaleX = currentWidth / naturalWidth.value;
  const scaleY = currentHeight / naturalHeight.value;

  areas.value = adatok.value.map((item: any) => ({
    shape: 'circle',
    coords: `${item.x * scaleX},${item.y * scaleY},${item.size * scaleX}`,
    ertek: bcrypt.hash(item.helyesValasz,10),
    id: item.id
  }));
};

onMounted(async () => {
  adatok.value = await getAdatok(Number(adat.value));
    if(!imgElement.value) return
 

  const handleImageLoad = () => {
    if(!adatok.value) return
    items2 = adatok.value.map(item => ({ helyesValasz: item.helyesValasz, id: item.id }));
    items2 = items2.sort(() => Math.random() - 0.5)
    if (imgElement.value?.naturalWidth === 3024) {
      naturalWidth.value = 1748;
      naturalHeight.value = 2331;
    } else if (imgElement.value?.naturalWidth === 4032) {
      naturalWidth.value = 1748;
      naturalHeight.value = 1311;
    }
    updateAreas();
    updateAnswers();
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
  activeArea.value = area;
  answer.value = answers.value[area.id] || '';
  if(tesztMod.value == 0){
    dialog3.value = true;
  }
  else if(tesztMod.value == 1){
    dialog2.value = true;
  }
};

const handleEllenorzes = () =>{
    vegeredmeny.value = true; 
}

document.onclick = function(e) {

  var x = e.pageX;
  var y = e.pageY;
  console.log("X is "+x+" and Y is "+y);
};

const handleNincsIlyen = () =>{
  push({name:'tanulo'})
}

</script>

<template>
  <v-container>
    <v-card class="alul">
      <v-card-title class="text-center">{{title }}</v-card-title>
      <img
        :src="`/public/kepek/tesztKepek/${kep}.jpg`"
        ref="imgElement"
        usemap="#dynamic-map"
        style="max-width: 100%; height: auto;"
        @error="handleNincsIlyen"
      />
      <v-card-actions>
        <v-btn
          class="mb-8 hattergomb"
          size="large"
          variant="elevated"
          block
          @click="handleEllenorzes()">
          Ellenőrzés
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

  <v-dialog max-width="500" v-model="vegeredmeny" transition="dialog-bottom-transition" fullscreen>
    <v-card class="alul">
      <v-card-title class="d-flex tesztTitle">Végeredmény
        <v-spacer></v-spacer>
        <v-btn
        @click="push({name: 'tanulo'})" class="hattergomb">
        Vissza a főoldalra
        </v-btn>
      </v-card-title>
      <v-table>
      <thead>
        <tr class="tablaFejResz">
          <th class="text-left">
            Sorszám
          </th>
          <th class="text-left">
            Helyes válasz
          </th>
          <th class="text-left">
            Válaszod
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="adat in adatok":key="adat.id">
          <td>{{ adat.adatSorszam }}</td>
          <td>{{ adat.helyesValasz }}</td>
          <td>{{ answers[adat.id] || 'Nincs válasz' }}</td>
        </tr>
      </tbody>
      </v-table>  
    </v-card>
  </v-dialog>

  <v-dialog max-width="500" v-model="dialog2" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="d-flex">Válasz megadása
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="dialog2 = false"
        ></v-btn>
      </v-card-title>
      <v-text-field
        v-if="activeArea"
        variant="outlined"
        v-model="answer"
        @input="handleAnswerChange(answer)"
      ></v-text-field>
    </v-card>
  </v-dialog>

  <v-dialog max-width="500" v-model="dialog3" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="d-flex">Válasz kiválasztása
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          @click="dialog3 = false"
        ></v-btn>
      </v-card-title>
      <v-select
        v-if="activeArea"
        variant="outlined"
        v-model="answer"
        :items="items2"
        item-title="helyesValasz"
        item-value="helyesValasz"
        @blur="handleAnswerChange(answer)"
        @change="handleAnswerChange(answer)"
      ></v-select>
    </v-card>
  </v-dialog>
</template>
<style scoped>
.v-table{
  background-color: #558B2F; 
  color: #ece7e2;
}
.alul{
  background-color: #e0f2f1;
}
.tesztTitle{
  color: #009688;
  background-color: #e0f2f1;
}
.hattergomb{
  background-color: #006663;
  color: #ece7e2;
}
.tablaFejResz{
  font-style: oblique;
  color: black;
}
.v-container{
background-color: #009688;
border: #006663 solid 10px;
}
</style>