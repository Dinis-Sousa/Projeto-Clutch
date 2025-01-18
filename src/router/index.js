import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '@/stores/users';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePageView.vue'),
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue'),
      meta: {isAuthenticated: true, }
    },
    {
      path:'/adminTickets',
      name:'adminTickets',
      component: () => import('../views/AdminTicketsView.vue'),
      meta:{isAuthenticated:true, isAdmin: true}
    },
    {
      path:'/adminUsers',
      name:'adminUsers',
      component: () => import('../views/AdminUsersView.vue'),
      meta:{isAuthenticated:true, isAdmin: true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path:'/registar',
      name: 'registar',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path:'/evento',
      name:'evento',
      component: () => import('../views/EventoPageView.vue'),
      meta: {isAuthenticated:true}
    },
    {
      path:'/areas',
      name:'areas',
      component: () => import('../views/AreasPageView.vue'),
      meta: {isAuthenticated:true}
    },
    {
      path:'/sobre',
      name:'sobre',
      component: () => import('../views/SobreView.vue'),
      meta: {isAuthenticated:true}
    },
    {
      path:'/perfil',
      name:'perfil',
      component: () => import('../views/PerfilView.vue'),
      meta: {isAuthenticated:true}
    },
    {
      path:'/agenda',
      name:'agenda',
      component: () => import('../views/AgendaView.vue'),
      meta: {isAuthenticated:true}
    },
    {
      path:'/carrinho',
      name:'carrinho',
      component: () => import('../views/CarrinhoView.vue'),
      meta: {isAuthenticated:true}
    },
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
