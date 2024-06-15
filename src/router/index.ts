import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import DescriptionPage from '@/views/DescriptionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/country/:countryName',
      name: 'country',
      component: DescriptionPage,
      props: true
    }
  ]
})

export default router
