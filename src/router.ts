import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';
import Home from '@/views/Home.vue';
import Onboarding from '@/views/Onbording.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/onboarding',
      component: Onboarding,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { hasBeenOnboarded } = store.getters;
  const isNavigatingToOnboarding = to.path.startsWith('/onboarding');
  const shouldBeOnboarded = !(isNavigatingToOnboarding || hasBeenOnboarded);
  if (shouldBeOnboarded) {
    next({
      path: '/onboarding',
      replace: true,
    });
  } else if (isNavigatingToOnboarding && hasBeenOnboarded) {
    next({
      path: '/',
      replace: true,
    });
  } else {
    next();
  }
});

export default router;
