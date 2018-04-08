<template>
  <v-card flat tile class="post">
    <v-layout row wrap>
      <v-card-title class="post-header title px-0 py-0">
        <v-layout row wrap>
          <v-flex xs12 md9>
            <v-container class="titlebox my-0 px-5 pt-5 text-xs-center text-md-left">
              <v-layout row wrap>
                <v-flex xs12><h2 class="display-1">{{ title }}</h2></v-flex>
                <v-flex xs12><p class="subheading">{{ subtitle }}</p></v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md3>
            <post-date />
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout row wrap>
            <div style=".image">
              <img class="mb-5" :src="illustration" />
            </div>
            <p class="body-2">{{ text }}</p>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions class="actions mb-5">
        <post-actions>
          <v-btn slot="leftAction" flat outline large class="big-button raleway mb-3">Continue Reading</v-btn>
          <v-btn small flat class="raleway">{{ tag }}</v-btn>
          <div class="v-separator"></div>
          <v-btn flat small color="blue-grey lighten-3" class="stat-btn raleway">
            <v-icon size="12px" class="mr-2">favorite</v-icon>
            <span class="blue-grey--text text--darken-4">{{ likes }}</span>
          </v-btn>
          <div class="v-separator"></div>
          <v-btn flat small color="blue-grey lighten-3" class="stat-btn raleway">
            <v-icon size="12px" class="mr-2">question_answer</v-icon>
            <span class="blue-grey--text text--darken-4">{{ comments }}</span>
          </v-btn>
        </post-actions>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
  import calendar from '~/modules/dateUtils'
  import PostDate from '~/components/PostDate'
  import PostActions from '~/components/PostActions'

  export default {
    data() {
      return {
        title: 'Euismod et accumsan',
        subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
        created_at: new Date(),
        author: 'Blue Raven',
        text: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
        tag: 'general',
        likes: 28,
        comments: 52,
        illustration: 'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
      }
    },
    methods: {
      date2Str: datetime => {
        const date = calendar(datetime)
        return `${date.monthName} ${date.day}, ${date.year}`
      }
    },
    components: { PostDate, PostActions }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .post {
    border: solid 1px rgba(160, 160, 160, 0.3);
  }

  .post-header{
    /* height: 200px; */
    border-bottom: solid 1px rgba(160, 160, 160, 0.3);
    width: 100%;
  }

  .titlebox {
    border-right: solid 1px rgba(160, 160, 160, 0.3);
    text-transform: uppercase;
    font-family: 'Raleway'
  }

  .titlebox, .datebox {
    height: inherit;
  }

  .actions {
    width: 100%;
  }
  
</style>
