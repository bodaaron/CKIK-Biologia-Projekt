<template>
    <v-container class="login-view" justify="center" align="center">
      <v-card class="pa-5" max-width="400">
        <v-card-title class="text-h5">Bejelentkezés</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="isValid">
            <v-text-field
              v-model="username"
              label="Felhasználónév"
              outlined
              dense
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Jelszó"
              type="password"
              outlined
              dense
              :rules="[rules.required]"
            ></v-text-field>
            <v-alert v-if="errorMessage" type="error" class="mt-3">
              {{ errorMessage }}
            </v-alert>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="handleLogin" :disabled="!isValid">
            Bejelentkezés
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="secondary" @click="goToRegister">
            Regisztráció
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
        isValid: false,
        rules: {
          required: (value) => !!value || "Ez a mező kötelező",
        },
      };
    },
    methods: {
      handleLogin() {
        if (this.username === "admin" && this.password === "1234") {
          alert("Sikeres bejelentkezés!");
          this.errorMessage = "";
        } else {
          this.errorMessage = "Hibás felhasználónév vagy jelszó.";
        }
      },
      goToRegister() {
        this.$router.push({ name: "Registration" }); 
      },
    },
  };
  </script>
  
  <style scoped>
  .login-view {
    display: flex;
    height: 100vh;
  }
  </style>
  