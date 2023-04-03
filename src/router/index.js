/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/add',
    name: 'AddProject',
    
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    
    component: () => import('../views/EditProject.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
