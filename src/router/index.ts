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
      meta:{requiresGuest: true}
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
      meta:{requiresGuest: true}
    },
    {
      path: '/tanulo',
      name: 'tanulo',
      component: TanuloView,
      meta:{requiresAuth: true, roles:[0]}
    },
    {
      path: '/tanar',
      name: 'tanar',
      component: TanarView,
      meta:{requiresAuth: true, roles:[1]}
    },
    {
      path: '/teszt/:id/:tesztId',
      name: 'teszt',
      component: TesztPageView,
      meta:{requiresAuth: true}
    },
    {
      path: '/felelet/:id/:tesztId/:feleletId',
      name: 'felelet',
      component: FeleletView,
      meta:{requiresAuth: true}
    },
    {
      path: '/megtekintes/:id/:fajlnev',
      name: 'megtekintes',
      component: MegtekintesView,
      meta:{requiresAuth: true}
    },
    {
      path: '/elfelejtettjelszo',
      name: 'eljelejtettjelszo',
      component: ForgotView,
      meta:{requiresGuest: true}
    },
    {
      path: '/jelszo-visszaallitas/:token',
      name: 'resetPassword',
      component: ResetPasswordView,
      meta:{requiresGuest: true}
    },
  ],
})

router.beforeEach(async (to, from, next) => {
   const userData = JSON.parse(localStorage.getItem('userData') || '{}');
   const userRole = userData.jogosultsag;

   if (to.meta.roles && Array.isArray(to.meta.roles)) {
    if (!to.meta.roles.includes(userRole)) {
      if (userRole != 0) {
        return next('/tanar');
      } else if (userRole != 1) {
        return next('/tanulo');
      }
    }
  }

  if (to.meta.requiresGuest) {
    if (userData && userRole) {
      return next(userRole === 1 ? '/tanar' : '/tanulo');
    }
  }

  if (to.meta.requiresAuth) {
    if (!userData || !userRole) {
      return next('/home');
    }
  }

    next();
  })

export default router
