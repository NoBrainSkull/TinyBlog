<template>
  <v-container class="px-0 mx-0">
    <v-layout row wrap align-center :justify-center="isMobile" class="px-0 mx-0">
      <v-btn outline :disabled="pageNumber == 0" large flat class="big-button pl-0 ml-0">Previous Page</v-btn>
      <v-btn outline :disabled="pageNumber >= maxPage" large flat class="big-button mx-4">Next Page</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import DeviceAware from '~/mixins/device-aware'
  export default {
    mixins: [DeviceAware],
    data () {
      return {
        pageNumber: 0,
        maxPage: 0
      }
    }
  }
</script>
