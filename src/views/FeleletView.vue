<script lang="ts" setup>
import type { Felelet, Valasz } from '@/api/felelet/felelet';
import { useFeleletDateUpdate, useGetDiakFeleletek, useValaszLeadas } from '@/api/felelet/feleletQuery';
import type { Adat } from '@/api/kep/kep';
import { useGetAdatok } from '@/api/kep/kepQuery';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const { push } = useRouter()
const {mutateAsync: getAdatok} = useGetAdatok();

const kep = ref<string>('');  
kep.value = String(route.params.tesztId);

const adat = ref<number>();
adat.value = Number(route.params.id);

const felelet = ref<number>();
felelet.value = Number(route.params.feleletId);

const tesztMod = ref<number>();
tesztMod.value = Number(route.params.tesztMod)

const adatok = ref<Adat[]>([]);
const { mutate: valaszLeadas } = useValaszLeadas()

const { mutate: feleletDateUpdate } = useFeleletDateUpdate() 
const { mutateAsync: getDiakFeleletek} = useGetDiakFeleletek();

const imgElement = ref<HTMLImageElement | null>(null);
const areas = ref<any[]>([]);
const naturalWidth = ref<number | null>(null);
const naturalHeight = ref<number | null>(null);
const dialog2 = ref(false);
const dialog3 = ref(false);
const dialog4 = ref(false);
const activeArea = ref<any>(null);
const feleletek = ref<Felelet[]>([]);
const answers = ref<Record<string, string>>({});  
const answer = ref<string>('');
const userData = JSON.parse(localStorage.getItem('userData') || '{}');
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
    ertek: item.helyesValasz,
    id: item.id
  }));
};

const Ellenorzes = () =>{
  const thisFelelet = feleletek.value.find((f) => f.id == felelet.value)
  if(thisFelelet?.kitoltesDatum != null || thisFelelet?.diakId != userData.id ){
  push({name:'tanulo'});
  }
}

onMounted(async () => {
  feleletek.value = await getDiakFeleletek(userData.id);
  Ellenorzes()
  adatok.value = await getAdatok(Number(adat.value));
  if(!imgElement.value) return
 

  const handleImageLoad = () => {
    if (imgElement.value?.naturalWidth === 3024) {
      naturalWidth.value = 1903;
      naturalHeight.value = 2537;
    } else if (imgElement.value?.naturalWidth === 4032) {
      naturalWidth.value = 1903;
      naturalHeight.value = 1427;
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
  items2 = adatok.value.map(item => ({ helyesValasz: item.helyesValasz, id: item.id }));
  if(tesztMod.value == 0){
    dialog4.value = true;
  }
  else if(tesztMod.value == 1){
    dialog2.value = true;
  }
};

document.onclick = function(e) {
  var x = e.pageX;
  var y = e.pageY;
  console.log("X is "+x+" and Y is "+y);
};

const handleBekuldes = () =>{
  dialog3.value = true;
}

const handleBekuldesDB = async () => {
  Object.entries(answers.value).forEach(async ([key, value]) => {
    var valasz: Valasz = {
      feleletId: Number(felelet.value),
      valasz: value,
    }
    await valaszLeadas(valasz)
  });
  feleletDateUpdate(Number(felelet.value))
  push({name: 'tanulo'})
};

const handleNincsIlyen = () =>{
  push({name:'tanulo'})
}

</script>

<template>
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

  <v-dialog max-width="500" transition="dialog-bottom-transition" fullscreen>
    <v-card>
      <v-card-title class="d-flex">Végeredmény
        <v-spacer></v-spacer>
        <v-btn
        @click="() => {push({ name: 'tanulo' })}">
        Vissza a főoldalra
        </v-btn>
      </v-card-title>
      <v-table>
      <thead>
        <tr>
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

  <v-dialog max-width="500" v-model="dialog4" transition="dialog-bottom-transition">
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


  <v-dialog max-width="500" v-model="dialog3" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="d-flex">Bíztosan beküldöd ezeket a válaszokat?
      </v-card-title>
      <v-card-actions>
        <v-btn
          @click="dialog3 = false"
        >Mégsem</v-btn>
        <v-btn
          @click="handleBekuldesDB()"
        >Igen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>



  <v-btn
    class="mb-8"
    size="large"
    variant="elevated"
    block
    @click="handleBekuldes()">
    Beküldés
  </v-btn>
</template>
