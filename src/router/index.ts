import HomePageView from '@/views/HomePageView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import TanuloView from '@/views/TanuloView.vue'
import TanarView from '@/views/TanarView.vue'
import TesztPageView from '@/views/TesztPageView.vue'
import HomePageView2 from '@/views/HomePageView2.vue'
import RegistrationView2 from '@/views/RegistrationView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePageView,
    },
    {
      path: '/home2',
      name: 'home2',
      component: HomePageView2,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/registration2',
      name: 'registration2',
      component: RegistrationView2,
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
      path: '/teszt/:id/:tesztId',
      name: 'teszt',
      component: TesztPageView,
    },
  ],
})

export default router
