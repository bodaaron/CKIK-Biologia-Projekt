<template>
    <v-container justify="center" align="center">
      <v-card class="pa-5" max-width="400">
        <v-card-title class="text-h5">Regisztráció</v-card-title>
        <v-card-text>
          <p>Itt kerül majd a regisztrációs űrlap</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="$router.push({ name: 'Login' })">
            Vissza a bejelentkezéshez
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "RegisterView",
  };
  </script>
  