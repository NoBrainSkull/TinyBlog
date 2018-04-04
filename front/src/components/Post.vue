<template>
  <v-card>
    <v-layout row wrap>
      <v-card-title class="title">
        <v-layout row wrap>
          <v-flex xs8>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12><h2><a href="#">Euismod et accumsan</a></h2></v-flex>
                <v-flex xs12><p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p></v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs4>
            <v-container>
              <v-layout row wrap align-right>
                <v-flex xs12><time class="published" datetime="2015-10-22">October 22, 2015</time></v-flex>
                <v-flex xs12><a href="#" class="author"><span class="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a></v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout row wrap>
            <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.</p>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 md8 class="actions">
             <v-btn flat class="button big">Continue Reading</v-btn>
            </v-flex>
            <v-flex xs12 md2><v-btn flat>General</v-btn></v-flex>
            <v-flex xs12 md1><v-btn flat class="icon fa-heart">28</v-btn></v-flex>
            <v-flex xs12 md1><v-btn flat class="icon fa-comment">128</v-btn></v-flex>
          </v-layout>
        </v-container>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Euismod et accumsan',
        subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
        created_at: new Date(),
        
      }
    }
  }
</script>

<style scoped>

</style>
