<template>
  <v-container>
    <v-layout v-if="isDesktop" row>
      <v-flex xs12>
        <v-layout row><slot name="leftAction" /></v-layout>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <v-layout row align-center justify-end>
          <slot></slot>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout v-else row wrap justify-center align-center class="actions">
      <v-flex xs12>
        <v-layout row align-center justify-center><slot name="leftAction"/></v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row align-center justify-center>
          <slot></slot>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DeviceAware from '~/mixins/device-aware'

export default {
  mixins: [DeviceAware]
}
</script>
