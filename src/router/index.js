import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About/About.vue'
import Home from '../views/Home/Home.vue'
import Contact from '../views/Contact/Contact.vue'
import Services from '../views/Services/Services.vue'
import Imprint from '../views/Imprint.vue'
import Privacy from '../views/Privacy.vue'
import Drones from '../views/Drones/Drones.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/drones', component: Drones },
  { path: '/contact', component: Contact },
  { path: '/impressum', component: Imprint },
  { path: '/datenschutz', component: Privacy },
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