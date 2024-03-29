// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMask from 'v-mask'
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false
Vue.use(VueMask)


new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
