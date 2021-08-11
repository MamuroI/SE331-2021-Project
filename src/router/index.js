import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import Layout from '@/views/patient/Layout.vue'
import Info from '@/views/patient/Info.vue'
import Vaccine from '@/views/patient/Vaccine.vue'
import Comment from '@/views/patient/Comment.vue'
import api from "@/services";
import GStore from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patient',
    name: 'Layout',
    component: Layout,
    beforeEnter: () => {
      return api.getPatient(GStore.selectedPatient)
        .then((response) => {
          GStore.patientInfo = response.data
          console.log(response.data)
        })
        .catch((err) => {
          if(err.response && err.response.status == 404){
            console.log(err)
          }

        })
    },
    children: [
      {
        path: '',
        name: 'Info',
        component: Info
      },
      {
        path: 'vaccine',
        name: 'Vaccine',
        component: Vaccine
      },
      {
        path: 'comment',
        name: 'Comment',
        component: Comment
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
