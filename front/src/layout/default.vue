<template>
  <v-container id="header">
    <top-menu/>
    <div id="main">
      <v-content>
        <slot></slot>
      </v-content>
    </div>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
  import TopMenu from "~/components/layout/LayoutHeaderMenu"
  import PostsList from "~/components/layout/LayoutPostList"

  export default { components: { TopMenu, PostsList } }
</script>

<style>
</style>