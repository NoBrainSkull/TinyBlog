<template>
  <v-navigation-drawer
      temporary
      :right="right"
      v-model="open"
      :dark="dark"
      absolute
      @input="open => open ? $emit('open') : $emit('close')"
    >
    <v-list class="pa-1">
      <v-list-tile tag="div">
        <v-list-tile-content>
          <v-list-tile-title>{{ title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider light></v-divider>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        mini: false,
        right: true,
        dark: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
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
      }
    },
  }
</script>
