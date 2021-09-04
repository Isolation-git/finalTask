import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/:username',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// let EXPIRESTIME = 86400000;
let EXPIRESTIME = 3600*1000;

router.beforeEach((to, from, next) => {
  if (to.path === '/login'||to.path === '/register'||to.path === '/home') return next();
  const token = window.localStorage.getItem('token');
  const startTime = window.localStorage.getItem("startTime");
  if (token) {
    let time = new Date().getTime();
    if (time - startTime > EXPIRESTIME) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      return next('/login');
    }
  } else {
    return next('/login')
  }
  next();
})

export default router
