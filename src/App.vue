<template>
  <div>
       <CreditCard/>
       <GitLink/>
  </div>
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
