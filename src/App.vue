<template>
  <v-app>
  <div>
       <CreditCard/>
       <GitLink/>
       <v-btn text small color="primary"> test </v-btn>
       <router-view></router-view>
  </div>
  </v-app>
</template>

<script>
import CreditCard from './components/CreditCard/CreditCard.vue'
import GitLink from './components/Github/GitHubLink.vue'

export default {
 name: 'app',
 components: {
   CreditCard,
   GitLink
 }
}
</script>
