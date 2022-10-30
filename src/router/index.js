import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
//import Jobs from '../views/Jobs/Jobs.vue'
//import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
    import ("../views/HomeView.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
    import ("../views/AboutView.vue")
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () =>
    import ("../views/Jobs/Jobs.vue")
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: () =>
    import ("../views/Jobs/JobsDetails.vue"),
    props: true
  },
  //Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //NotFound
  {
    path: '/:catchALL(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
