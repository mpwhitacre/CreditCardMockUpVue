<template>
  <v-app>
  <div id="app">
       <TopBar/>
       <router-view/>
       <GitLink/>
  </div>
  </v-app>
</template>

<script>
import CreditCard from './components/CreditCard/CreditCard.vue'
import GitLink from './components/Github/GitHubLink.vue'
import TopBar from './components/TopBar/TopBar.vue'


export default {
 name: 'app',
 components: {
   CreditCard,
   GitLink,
   TopBar
 }
}
</script>

<style>
#app {
  background: linear-gradient(to bottom right,#cfd0fa,#30c7c7, #01048c);
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  padding: 50px 15px;
  display: block;
  font-family: 'Actor';font-size: 22px;
  font-size: 30px;
}

</style>
