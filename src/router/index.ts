import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import DiakView from '@/views/DiakView.vue'
import GyakorloTesztekView from '@/views/GyakorloTesztekView.vue'
import TanarView from '@/views/TanarView.vue'
import TesztekView from '@/views/TesztekView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'Home',component:HomeView,},
    {path: '/login',name: 'Login',component:LoginView,},
    {path: '/registration',name: 'Registration',component:RegistrationView,},
    {path: '/diak',name: 'Diak',component: DiakView,},
    {path: '/gyakorlo_tesztek',name: 'GyakorloTesztek',component: GyakorloTesztekView,},
    {path: '/tanar',name: 'Tanar',component: TanarView,},
    {path: '/tesztek',name: 'Tesztek',component: TesztekView,},

  ],
})

export default router
