import HomePageView from '@/views/HomePageView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePageView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
  ],
})

export default router
