<template>
  <v-layout row wrap align-center justify-center>
    <post v-for="post in posts" v-bind:key="post.id" :post="post" class="mb-5" />
  </v-layout>
</template>

<script>
import Post from '~/components/Post'
export default {
  components: { Post },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Euismod et accumsan',
          subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
          createdAt: new Date(),
          author: 'Blue Raven',
          text:
            'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
          tag: 'general',
          likes: 28,
          comments: 52,
          illustration:
            'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
        },
        {
          id: 2,
          title: 'Euismod et accumsan',
          subtitle: 'Lorem ipsum dolor amet nullam consequat etiam feugiat',
          createdAt: new Date(),
          author: 'Blue Raven',
          text:
            'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.',
          tag: 'general',
          likes: 28,
          comments: 52,
          illustration:
            'https://cdna.artstation.com/p/assets/images/images/008/221/338/large/nabetse-zitro-v-n.jpg?1511283613'
        }
      ]
    }
  }
}
</script>
