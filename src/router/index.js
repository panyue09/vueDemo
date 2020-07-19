import Vue from 'vue'
import Router from 'vue-router'
import Appindex from '@/components/home/Appindex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'
import Regist from '@/components/Regist'
import JotterIndex from '@/components/jotter/JotterIndex'
import AdminIndex from '@/components/admin/AdminIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [ {
        path: '/index',
        name: 'Appindex',
        component: Appindex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/library',
        name: 'Library',
        component: LibraryIndex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/jotter',
        name: 'JotterIndex',
        component: JotterIndex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/admin',
        name: 'AdminIndex',
        component: AdminIndex,
        meta: {
          requireAuth: true
        }
      }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: Appindex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/jotterIndex',
      name: 'JotterIndex',
      component: JotterIndex
    },
    {
      path: '/adminIndex',
      name: 'AdminIndex',
      component: AdminIndex
    }
  ]
})
