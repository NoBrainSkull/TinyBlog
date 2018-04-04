<template>
  <v-toolbar class="topbar" app flat>
    <h1 class="body-2"><a href="#">{{ homeButton }}</a></h1>
    <nav class="links pt-2">
      <v-btn v-for="item in menuItems" v-bind:key="item" flat class="slim">{{ item }}</v-btn>
    </nav>
    <v-spacer></v-spacer>
    <v-icon class="mr-5">search</v-icon>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        homeButton: 'Future Imperfect',
        menuItems : ['Lorem', 'Ipsum', 'Feugiat', 'tempus', 'adipiscing']
      }
    }
  }
</script>

<style scoped>
  .topbar {
    background: #fefefe!important;
    border: solid 1px rgba(160, 160, 160, 0.3);
  }

  .links {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    height: inherit;
    margin-left: 1.5em;
    overflow: hidden;
    padding-left: 1.5em;
  }

  .links .slim {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    line-height: 1;
    margin-left: 1em;
    padding-left: 1em;
  }
  
  .links .slim:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }

  .topbar a {
    text-decoration: none!important;
    color: black;
    font-family: Raleway, Helvetica, sans-serif!important;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.25em;
  }

  .slim {
    letter-spacing: 0.25em;
    font-weight: 100;
  }
</style>