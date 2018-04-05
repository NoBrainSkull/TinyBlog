<template>
  <v-container id="header">
    <top-bar :title="'Future Imperfect'">
      <div slot="top-bar-menu">
        <v-btn v-show="isDesktop" v-for="item in menuItems" v-bind:key="item" flat class="slim">{{ item }}</v-btn>
      </div>        
      <div slot="top-bar-actions">
        <v-btn flat icon class="mr-2"><v-icon>search</v-icon></v-btn>
      </div>
    </top-bar>
    <div id="main">
      <v-content>
        <slot></slot>
      </v-content>
    </div>
    <v-footer app>
      <span>&copy; {{ new Date().getUTCFullYear() }}</span>
    </v-footer>
  </v-container>
</template>

<script>
  import TopBar from "~/components/layout/LayoutTopBar"
  import PostsList from "~/components/layout/LayoutPostList"

  export default { 
    components: { TopBar, PostsList },
    data () {
      return {
        menuItems : ['Lorem', 'Ipsum', 'Feugiat', 'tempus', 'adipiscing']
      }
    },
    computed: {
      isMobile() {
        return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
      },
      isDesktop() {
        return !(this.isMobile)
      }
    }
  }
</script>

<style>
</style>