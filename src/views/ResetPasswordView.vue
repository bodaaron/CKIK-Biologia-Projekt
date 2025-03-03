<script lang="ts">
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      email: '',
    }
  },
  created() {
    const token = this.$route.params.token
    try {
      const decoded = jwtDecode(token)
      this.email = decoded.email
      console.log(decoded)
    } catch (error) {
      console.error('Hibás token!', error)
    }
  },
  methods: {
    async handlePasswordReset() {

      if (this.newPassword !== this.confirmPassword) {
        alert('A jelszavak nem egyeznek!')
        return
      }


      try {
        const response = await axios.post('http://localhost:3000/api/reset-password', {
          email: this.email,
          newPassword: this.newPassword,
        })
        alert(response.data.message)
      } catch (error) {
        console.error('Hiba történt a jelszó visszaállításakor:', error)
      }
    },
  },
}
</script>
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
