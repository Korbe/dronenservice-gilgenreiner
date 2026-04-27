import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/about/About.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/services/Services.vue') },
  { path: '/drones', name: 'Drones', component: () => import('../views/drones/Drones.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/contact/Contact.vue') },
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