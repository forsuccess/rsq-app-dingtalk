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
import schenew from 'com/sche/schenew'
import schemain from 'com/sche/schemain'
import remind from 'com/pub/remind'
import timeAndRemind from 'com/pub/timeAndRemind'
import childtask from 'com/sche/childtask'
import scheDetail from 'com/sche/scheDetail'
import timeOpen from 'com/pub/timeOpen'
import inboxNew from 'com/inbox/inboxNew'
import repeat from 'com/sche/repeat'
import date from 'com/sche/date'
import coment from 'com/pub/coment'
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
      path: '/pub/coment',
      name: 'coment',
      component: coment,
      meta: {requireAuth: true}
    },
    {
      path: '/sche/date',
      name: 'date',
      component: date,
      meta: {requireAuth: true}
    },
    {
      path: '/inbox/inboxNew',
      name: 'inboxNew',
      component: inboxNew,
      meta: {requireAuth: true}
    },
    {
      path: '/sche/scheDetail',
      name: 'scheDetail',
      component: scheDetail,
      meta: {requireAuth: true}
    },
    {
      path: '/pub/timeOpen',
      name: 'timeOpen',
      component: timeOpen,
      meta: {requireAuth: true}
    },
    {
      path: '/sche/childtask',
      name: 'childtask',
      component: childtask,
      meta: {requireAuth: true}
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox,
      meta: {requireAuth: true}
    },
    {
      path: '/sche/schenew',
      name: 'schenew',
      component: schenew,
      meta: {requireAuth: true}
    },
    {
      path: '/pub/timeAndRemind',
      name: 'timeAndRemind',
      component: timeAndRemind,
      meta: {requireAuth: true}
    },
    {
      path: '/pub/remind',
      name: 'remind',
      component: remind,
      meta: {requireAuth: true}
    },
    {
      path: '/sche/schemain',
      name: 'schemain',
      component: schemain,
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
      path: '/sche/repeat',
      name: 'repeat',
      component: repeat,
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
