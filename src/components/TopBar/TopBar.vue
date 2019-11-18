<template>
  <div class="topbar-container">
     <div class="topbar-button-container">
       <TopBarButton v-for="button in navButtons"
        :to="button.to"
        :expand="expand"
        :icon="button.icon"
        :name="button.name"
        :currentPage="currentPage"
         :changePage="changePage"/>
     </div>
  </div>
</template>

<script>
import TopBarButton from '@/components/TopBar/TopBarButton'
export default {
  data: () => ({
     navButtons: [
         {
             to: "/",
             icon: "mdi-home",
             name: "Home"
         },
         {

             to: "/card",
             icon: "mdi-credit-card-plus",
             name: "Card"
         },
         {
             to: "/about",
             icon: "mdi-help",
             name: "About"
         }
         ],
         currentPage: "Home",
         expand: false,
  }),
  components: {
         TopBarButton
        },
  methods: {
        changePage: function(name) {
            this.currentPage = name;
        }
  }
}
</script>

<style>
.topbar-container {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 10;
   background: linear-gradient(to bottom right,#dcdede,#c9c9c9);
}
</style>
