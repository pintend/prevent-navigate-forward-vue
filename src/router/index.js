import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/random-page',
      name: 'random-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page.vue')
    }
  ]
})

export default router
