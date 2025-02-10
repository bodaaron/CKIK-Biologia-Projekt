<template>
  <div>
    <h2>Jelszó visszaállítása</h2>
    <form @submit.prevent="handlePasswordReset">
      <div>
        <label for="newPassword">Új jelszó:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>
      <div>
        <label for="confirmPassword">Jelszó megerősítése:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <button type="submit">Jelszó visszaállítása</button>
    </form>
  </div>
</template>

<script></script>
