import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '@/stores/users';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePageView.vue'),
      meta:{isAuthenticated: true}
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue'),
      meta: {isAuthenticated: true}
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

router.beforeEach((to, from, next) => {
  const usersStore = useUsersStore();
  if(to.meta.isAuthenticated && usersStore.isAuthenticated === false){
    next('/login')
    } else {
      next();
    }
})

export default router
