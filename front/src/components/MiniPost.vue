<template>
  <article>
    <header>
      <v-card hover flat color="white" class="mini-post mt-5">
        <v-layout row wrap align-center justify-center>
          <div class="image">
            <img :src="illustration" alt="" />
          </div>
          <v-flex xs10 class="mt-3 px-3 py-3">
            <h3 class="title raleway">{{ title }}</h3>
            <time class="subheading" :datetime="createdAt">{{ createdAt }}</time>
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
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        required: true
      },
      illustration: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      }
    }
  }
</script>
