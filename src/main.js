// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { showAlert } from './utils'
import {sync} from 'vuex-router-sync'
import api from '@/service'
import { Loading, Card } from '@/components/Common'

Vue.config.productionTip = false
Vue.prototype.$showAlert = showAlert
Vue.prototype.$api = api
Vue.component('Loading', Loading)
Vue.component('Card', Card)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
