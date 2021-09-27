import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'Login'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      requiredAuth: true
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    meta: {
      requiredAuth: true
    },
    component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue')
  },
  {
    path: '/editando/:id',
    props: true,
    name: 'Editando',
    meta: {
      requiredAuth: true
    },
    component: () => import(/* webpackChunkName: "Editando" */ '../views/Editando.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'Login'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let user = store.getters.enviandoUser;
  let requiredAuth = to.matched.some(res => res.meta.requiredAuth);

  if (!user && requiredAuth) {
    next({name: 'Login'});
  } else if(user && !requiredAuth){
    next();
  } else {
    next();
  }
})

export default router
