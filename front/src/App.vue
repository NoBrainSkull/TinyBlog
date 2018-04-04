<template>
  <v-app>
    <layout>
      <router-view />
    </layout>
  </v-app>
</template>

<script>
  import Layout from './layout/default'

  export default {
    components: { Layout }
  }
</script>
