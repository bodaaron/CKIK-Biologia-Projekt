<script lang="ts" setup>
import { useGetAdatok } from '@/api/kep/kepQuery';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const kep = ref<string>('');
kep.value = String(route.params.fajlnev);

const adat = ref<number>();
adat.value = Number(route.params.id)

const {data:adatok,isLoading} = useGetAdatok(Number(adat.value))

const imgElement = ref<HTMLImageElement | null>(null);
const originalWidth = ref<number>(0);
const originalHeight = ref<number>(0);

const areas = computed(() => {
  if (!adatok.value || !originalWidth.value || !originalHeight.value) return [];
  const displayedWidth = imgElement.value?.clientWidth || originalWidth.value;
  const displayedHeight = imgElement.value?.clientHeight || originalHeight.value;
  console.log(imgElement.value?.clientWidth, imgElement.value?.clientHeight)
  console.log(displayedWidth, displayedHeight)
  const widthRatio = displayedWidth / originalWidth.value;
  const heightRatio = displayedHeight / originalHeight.value;

  console.log("bruh")
  return adatok.value.map((item: any) => ({
    shape: "circle",
    coords: `${item.x * widthRatio},${item.y * heightRatio},${item.size * widthRatio}`,
  }));
});

const handleClick = (area: any) => {
    alert("WOWZA");
};

onMounted(() => {
  const img = imgElement.value;
  if (img) {
    img.onload = () => {
      originalWidth.value = img.width;
      originalHeight.value = img.height;
    };
  }
});

document.onclick = function(e){
  var x = e.pageX;
  var y = e.pageY;
  console.log("X is "+x+" and Y is "+y);
  console.log(areas);
  const img2 = imgElement.value;
  if (img2) {
    console.log(img2.width, img2.height)
    };
};


</script>
<template>
    <img :src="`/public/kepek/${kep}.jpg`"  ref="imgElement" usemap="#dynamic-map" style="max-width: 100%; height: auto;"></img>
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