import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Main.vue')
    },

    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/layouts/Default.vue'),
      children: [
        {
          path: '/Introduction',
          name: 'Intro',
          component: () => import('@/pages/Intro.vue')
        },
        {
          path: '/Project',
          name: 'Project',
          component: () => import('@/pages/Project.vue')
        },
        {
          path: '/Experience',
          name: 'Experience',
          component: () => import('@/pages/Experience.vue')
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: () => import('@/pages/Contact.vue')
        }
      ]
    }
  ]
})

export default router
