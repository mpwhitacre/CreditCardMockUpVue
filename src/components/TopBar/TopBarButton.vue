<template>

    <router-link v-bind:to="to" @click.native="changePage(name)" class="topbar-button" v-bind:class="classObject" tag="button">
      <v-icon color="white">{{ icon }}</v-icon>
      <span class="font-weight-light topbarText" :class="expand ? 'topbarTextShow':''">

        {{ name }}
      </span>
    </router-link>

</template>

<script>
export default {
    props: {
        icon: String,
        to: String,
        name: String,
        currentPage: String,
        changePage: Function,
        expand: Boolean,
    },
    computed: {
      classObject: function () {
        return {
          sidebarActiveButton: this.name === this.currentPage,
          sidebarHover: this.expand === true,
        }
      }
    }

}
</script>

<style>
.topbar-button {
    position: relative;
    text-align: center;
    margin-bottom: 4px;
    background: rgba(0,0,0,0.00);
    border-radius: 4px;
    padding-right: 10px;
    outline: none;
    box-sizing: border-box;
}

</style>
