<template>
  <section>
    <v-layout v-if="isDesktop" row wrap>
      <mini-post v-for="post in posts" v-bind:key="post.id" :post="post" :avatar="user.avatar"/>
    </v-layout>
    <v-layout v-else row wrap class="py-3">
      <v-flex xs6 v-for="post in posts" v-bind:key="post.id" class="px-3 my-3 py-0">
        <mini-post :post="post" :avatar="user.avatar" class="my-0 py-0"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  import MiniPost from '~/components/MiniPost.vue'
  import DeviceAware from '~/mixins/device-aware'

  export default {
    mixins: [DeviceAware],
    components: { MiniPost },
    props: {
      posts: {
        type: Array,
        required: true
      },
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
</style>