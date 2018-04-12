<template>
  <article>
    <header>
      <v-card hover flat color="white" class="mini-post">
        <v-layout row wrap align-center justify-center>
          <div class="image">
            <img :src="post.illustration" alt="" />
          </div>
          <v-flex xs10 class="mt-3 px-3 py-3">
            <h3 class="title raleway">{{ post.title }}</h3>
            <time class="subheading" :datetime="post.createdAt">{{ date2Str(post.createdAt) }}</time>
          </v-flex>
          <v-flex xs2><v-avatar :size="40"><img :src="avatar" alt="" /></v-avatar></v-flex>
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
  import calendar from '~/modules/dateUtils'
  export default {
    props: {
      post: {
        type: Object,
        required: true
      },
      avatar: {
        type: String,
        required: true
      }
    },
    methods: {
      date2Str: datetime => {
        const date = calendar(datetime)
        return `${date.monthName} ${date.day}, ${date.year}`
      }
    },
  }
</script>
