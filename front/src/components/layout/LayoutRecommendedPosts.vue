<template>
  <section>
    <v-layout v-if="isDesktop" row wrap>
      <mini-post v-for="post in posts" v-bind:key="post.title" :title="post.title" :createdAt="post.createdAt" :illustration="post.illustration" :avatar="post.avatar"/>
    </v-layout>
    <v-layout v-else row wrap>
      <v-flex xs6 v-for="post in posts" v-bind:key="post.title" class="px-3 py-3">
        <mini-post :title="post.title" :createdAt="post.createdAt" :illustration="post.illustration" :avatar="post.avatar"/>
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
    data() {
      return {
        posts: [
          { 
            id: 1,
            title: 'Rutrum neque accumsan',
            createdAt: new Date(),
            illustration: 'https://loremflickr.com/800/600',
            avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
            
          },
          { 
            id: 2,
            title: 'Rutrum neque accumsan',
            createdAt: new Date(),
            illustration: 'https://loremflickr.com/800/600',
            avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
            
          },
          { 
            id: 3,
            title: 'Rutrum neque accumsan',
            createdAt: new Date(),
            illustration: 'https://loremflickr.com/800/600',
            avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
            
          },
          { 
            id: 4,
            title: 'Rutrum neque accumsan',
            createdAt: new Date(),
            illustration: 'https://loremflickr.com/800/600',
            avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
            
          }
        ]
      }
    }
  }
</script>

<style>
</style>