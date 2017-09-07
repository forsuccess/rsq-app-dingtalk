// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'as/css/index.scss'

// import 'as/css/frm-main.scss'
// import 'as/js/frm-main.js'
//
// import 'as/css/layer.scss'
// import 'as/js/layer.js'

import 'as/js/rsqAdapterManager.js'
import 'as/js/rsqDdmAdapter.js'
// xss漏洞
import 'as/js/xssFilter.js'

// 全局添加Promise垫片，防止不支持promise的浏览器中出现bug
import Promise from 'es6-promise'
Promise.polyfill()

import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueTouch)

Vue.config.productionTip = false

// window.rsqadmg.exec('auth', {
//   success: function (rsqUser, authUser) {
//     store.state.loginUser = {
//       rsqUser: rsqUser,
//       authUser: authUser
//     }
//
//     store.state.env.isAddNav = true
//     store.state.env.dType = 'p'
//
//     /* eslint-disable no-new */
//     new Vue({
//       el: '#app',
//       router,
//       store,
//       template: '<App/>',
//       components: { App }
//     })
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 获取到签名之后再启动vue.js
// window.rsqadmg.execute('auth', {
//   success: function (rsqUser, authUser) {
//     window.rsqadmg.log('success get signature')
//     store.state.loginUser = {
//       rsqUser: rsqUser,
//       authUser: authUser
//     }
//     // 设置导航栏的样式
//     store.state.env.isAddNav = true
//     store.state.env.dType = 'm'
//
//     /* eslint-disable no-new */
//     new Vue({
//       el: '#app',
//       router,
//       store,
//       template: '<App/>',
//       components: { App }
//     })
//     // rsqadmg.exec('hideLoader');
//   },
//   error: function (err) {
//     alert('权限验证失败---：' + JSON.stringify(err))
//   }
// })
