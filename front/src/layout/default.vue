<template>
  <v-container id="header">
    <top-menu/>
    <v-content>
      <slot></slot>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
  import TopMenu from "~/components/layout/LayoutHeaderMenu"

  export default { components: { TopMenu } }
</script>