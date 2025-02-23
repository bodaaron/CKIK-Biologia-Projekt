import HomePageView from '@/views/HomePageView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import TanuloView from '@/views/TanuloView.vue'
import TanarView from '@/views/TanarView.vue'
import TesztPageView from '@/views/TesztPageView.vue'
import MegtekintesView from '@/views/MegtekintesView.vue'
import ForgotView from '@/views/ForgotView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import FeleletView from '@/views/FeleletView.vue'

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
      path: '/teszt/:id/:tesztId',
      name: 'teszt',
      component: TesztPageView,
    },
    {
      path: '/felelet/:id/:tesztId/:feleletId',
      name: 'felelet',
      component: FeleletView,
    },
    {
      path: '/megtekintes/:id/:fajlnev',
      name: 'megtekintes',
      component: MegtekintesView,
    },
    {
      path: '/elfelejtettjelszo',
      name: 'eljelejtettjelszo',
      component: ForgotView,
    },
    {
      path: '/jelszo-visszaallitas/:token',
      name: 'resetPassword',
      component: ResetPasswordView,
    },
  ],
})

export default router
