import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AddView from '../views/AddView.vue'
import SigninView from '../views/SigninView.vue'
import UpdateView from '../views/UpdateView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateView
  }
]
  //component...
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
