import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue')
    },
    {
      path:'/adminTickets',
      name:'adminTickets',
      component: () => import('../views/AdminTicketsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path:'/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ],
})

export default router
