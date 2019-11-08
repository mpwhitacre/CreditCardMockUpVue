import Vue from 'vue'
import App from './App.vue'
import CreditCard from './CreditCard.js'

Vue.config.productionTip = false

new Vue({
  CreditCard,
  render: h => h(App),
}).$mount('#app')
