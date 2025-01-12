import HomePageView from '@/views/HomePageView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TanuloView from '@/views/TanuloView.vue'
import TanarView from '@/views/TanarView.vue'
import TesztPageView from '@/views/TesztPageView.vue'

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
    {
      path: '/tanulo',
      name: 'tanulo',
      component: TanuloView,
    },
    {
      path: '/tanar',
      name: 'tanar',
      component: TanarView,
    },
    {
      path: '/teszt/:tesztId',
      name: 'teszt',
      component: TesztPageView,
    },
  ],
})

export default router
