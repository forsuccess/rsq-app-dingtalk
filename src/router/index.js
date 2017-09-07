import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
// import api from '@/api'
import time from 'com/pub/time'
import Login from 'com/Login'
import Sche from 'com/sche/Main'
import Inbox from 'com/inbox/Main'
import InboxTodoNew from 'com/sche/TodoNew'
// import InboxTodoEdit from 'com/sche/TodoEdit'
import Plan from 'com/plan/Main'
import Doc from 'com/doc/Main'
import Me from 'com/me/Main'
import kefu from 'com/me/kefu'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/sche'
    },
    {
      path: '/sche',
      name: 'sche',
      component: Sche,
      meta: {requireAuth: true}
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox,
      meta: {requireAuth: true}
    },
    {
      path: '/me/kefu',
      name: 'kefu',
      component: kefu,
      meta: {requireAuth: true}
    },
    {
      path: '/pub/time',
      name: 'time',
      component: time,
      meta: {requireAuth: true}
    },
    // {
    //   path: '/todo/:todoId',
    //   name: 'todoEdit',
    //   component: InboxTodoEdit,
    //   meta: {requireAuth: true}
    // },
    {
      //  todoType用来表示是收纳箱新建todo还是日程新建todo，"inbox" or "schedule"
      path: '/todo/new/:todoType',
      name: 'todoNew',
      component: InboxTodoNew,
      meta: {requireAuth: true}
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan,
      meta: {requireAuth: true}
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc,
      meta: {requireAuth: true}
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      meta: {requireAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   store.state.env.isShowNav = false
//   store.state.sys.currentPath = to.path
//
//   if (!to.matched.some(record => record.meta.requireAuth)) {
//     return next()
//   }
//   var currentUser = store.state.loginUser
//   if (currentUser == null || currentUser.rsqUser == null) {
//     currentUser = currentUser || {}
//     api.system.checkAuth()
//       .then((res) => {
//         if (res.id) {
//           currentUser.rsqUser = res
//           store.state.loginUser = currentUser
//           next()
//         } else {
//           next('/login')
//         }
//       })
//   } else {
//     window.rsqadmg.log('login user found')
//     next()
//   }
// })

export default router
