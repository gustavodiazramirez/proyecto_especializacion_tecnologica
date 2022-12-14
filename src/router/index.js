import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import agregarAsignaturas from '../views/ingresarAsignatura.vue'
import a├▒adirEvaluaciones from '../views/a├▒adirEvaluaciones.vue'
import detallesAsignaturas from '../views/detallesAsignatura.vue'
import listadoAsignaturas from '../views/listadoAsignaturas.vue'
import listadoEvaluaciones from '../views/listadoEvaluaciones.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/agregarAsignaturas',
    component: agregarAsignaturas
  },
  {
    path: '/detallesAsignaturas/ingresarEvaluaciones',
    component: a├▒adirEvaluaciones
  },
  {
    path: '/detallesAsignaturas',
    component: detallesAsignaturas
  },
  {
    path: '/listarAsignaturas',
    component: listadoAsignaturas
  },
  {
    path: '/detallesAsignaturas/listadoEvaluaciones',
    component: listadoEvaluaciones
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
