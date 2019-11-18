import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreditCard from '@/components/CreditCard/CreditCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/card',
      name: 'MainPage',
      component: CreditCard
    },
    {
          path: '*',
          component: HelloWorld
    }
  ]
})
