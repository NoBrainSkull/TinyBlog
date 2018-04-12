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
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Euismod et accumsan',
            subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
            createdAt: new Date(),
            author: 'Blue Raven',
            text: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
            tag: 'general',
            likes: 28,
            comments: 52,
            illustration: 'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
          },
          {
            id: 2,
            title: 'Euismod et accumsan',
            subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
            createdAt: new Date(),
            author: 'Blue Raven',
            text: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
            tag: 'general',
            likes: 28,
            comments: 52,
            illustration: 'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
          },
          {
            id: 3,
            title: 'Euismod et accumsan',
            subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
            createdAt: new Date(),
            author: 'Blue Raven',
            text: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
            tag: 'general',
            likes: 28,
            comments: 52,
            illustration: 'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
          },
          {
            id: 4,
            title: 'Euismod et accumsan',
            subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
            createdAt: new Date(),
            author: 'Blue Raven',
            text: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
            tag: 'general',
            likes: 28,
            comments: 52,
            illustration: 'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
          }
        ],
        user: {
          avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
        }
      }
    }
  }
</script>

<style>
</style>