<template>
  <article>
    <header>
      <v-card hover flat color="white" class="mini-post mt-5">
        <v-layout row wrap align-center justify-center>
          <div class="image">
            <img src="https://loremflickr.com/800/600" alt="" />
          </div>
          <v-flex xs10 class="mt-3 px-3 py-3">
            <h3 class="title raleway">Rutrum neque accumsan</h3>
            <time class="subheading" datetime="2015-10-19">October 19, 2015</time>
          </v-flex>
          <v-flex xs2><v-avatar :size="40"><img src="https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg" alt="" /></v-avatar></v-flex>
        </v-layout>
      </v-card>
    </header>
  </article>
</template>

<style scoped>
  .mini-post {
    border: solid 1px rgba(160, 160, 160, 0.5)!important;
  }

  .image {
    height: 15em;
  }
</style>

<script>
  export default {
    
  }
</script>
