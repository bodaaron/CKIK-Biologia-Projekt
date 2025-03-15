<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app full-height>
    <v-layout class="rounded rounded-md">
      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-app>
</template>
