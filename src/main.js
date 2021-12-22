import Vue from 'vue'
import Element from 'element-ui'

import router from './router'
import store from './store'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})