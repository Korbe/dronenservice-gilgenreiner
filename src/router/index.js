import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About/About.vue'
import Home from '../views/Home/Home.vue'
import Contact from '../views/Contact/Contact.vue'
import Services from '../views/Services/Services.vue'
import Imprint from '../views/Imprint.vue'
import Privacy from '../views/Privacy.vue'
import Drones from '../views/Drones/Drones.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About/About.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/Services/Services.vue') },
  { path: '/drones', name: 'Drones', component: () => import('../views/Drones/Drones.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact/Contact.vue') },
  { path: '/impressum', name: 'Imprint', component: () => import('../views/Imprint.vue') },
  { path: '/datenschutz', name: 'Privacy', component: () => import('../views/Privacy.vue') },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Wenn Browser "Zurück" benutzt → alte Position
    if (savedPosition) {
      return savedPosition
    }

    // Immer nach oben scrollen
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router