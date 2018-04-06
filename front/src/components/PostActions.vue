<template>
  <v-container>
    <v-layout v-if="isDesktop" row>
      <v-flex xs12>
        <v-layout row><slot/></v-layout>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <v-layout row justify-end>
          <v-btn flat class="raleway">{{ tag }}</v-btn>
          <v-btn flat icon color="blue-grey lighten-3" class="stat-btn raleway mr-4">
            <v-icon size="16px">favorite</v-icon>
            <span class="blue-grey--text text--darken-4">{{ likes }}</span>
          </v-btn>
          <v-btn flat icon color="blue-grey lighten-3" class="stat-btn raleway">
            <v-icon size="16px">question_answer</v-icon>
            <span class="blue-grey--text text--darken-4">{{ comments }}</span>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout v-else row wrap justify-center align-center class="actions">
      <v-flex xs12>
        <v-layout row align-center justify-center><slot/></v-layout>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <v-layout row align-center justify-center>
          <v-btn flat class="raleway">{{ tag }}</v-btn>
          <v-btn flat icon color="blue-grey lighten-3" class="stat-btn raleway mr-4">
            <span class="blue-grey--text text--darken-4">{{ likes }}</span>
            <v-icon size="16px">favorite</v-icon>
          </v-btn>
          <v-btn flat icon color="blue-grey lighten-3" class="stat-btn raleway">
            <span class="blue-grey--text text--darken-4">{{ comments }}</span>
            <v-icon size="16px">question_answer</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import DeviceAware from '~/mixins/device-aware'

  export default {
    mixins: [DeviceAware],
    data() {
      return {
        tag: 'general',
        likes: 28,
        comments: 52
      }
    }
  }
</script>

<style scoped>
  .stat-btn {
    border-left: dotted 1px rgba(160, 160, 160, 0.3);
  }
</style>
