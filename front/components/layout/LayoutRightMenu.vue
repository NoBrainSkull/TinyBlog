<template>
  <v-navigation-drawer
      temporary
      :right="right"
      v-model="open"
      absolute
      :width="400"
      @input="open => open ? $emit('open') : $emit('close')"
    >
    <v-container class="my-5 px-5">
      <v-text-field 
        name="search" solo label="search" id="search"
        prepend-icon="search" color="primary" >
      </v-text-field>
    </v-container>
    <v-divider light></v-divider>
    <v-list two-line class="pl-3">
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="display-1 menu-item-title">{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title class="subheading">{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      mini: false,
      right: true
    }
  },
  props: {
    title: {
      type: String,
      default: 'Define me!'
    },
    open: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-item-title {
  height: 30px !important;
}
</style>
