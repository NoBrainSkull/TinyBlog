<template>
  <v-container>
    <v-toolbar class="topbar" app flat>
      <h1 class="body-1 hand" @click.stop="$emit('HomeAction')">{{ title }}</h1>
      <nav class="links py-0">
        <slot name="top-bar-menu">
          <v-flex class="slim my-0">
            <v-btn v-show="isDesktop" v-for="item in items" v-bind:key="item.title" flat><span class="mt-4">{{ item.title }}</span></v-btn>
          </v-flex>
        </slot>
      </nav>
      <v-spacer></v-spacer>
      <slot name="top-bar-actions"></slot>
      <div class="bl mr-0 px-1">
        <v-btn v-show="isMobile" flat icon @click.stop="rightMenu = !rightMenu"><v-icon class="grey--text">fa-bars</v-icon></v-btn>
      </div>
    </v-toolbar>
    <slot name="mobile-menu">
      <right-menu :title="'Future Imperfect'" :items="items" :open="rightMenu" @close="rightMenu = false" />
    </slot>
  </v-container>
</template>

<script>
import RightMenu from './LayoutRightMenu'
import DeviceAware from '~/mixins/device-aware'

export default {
  mixins: [DeviceAware],
  data() {
    return {
      rightMenu: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'Define me!'
    },
    items: {
      type: Array,
      required: true
    },
    enableRightPanel: {
      type: Boolean,
      default: true
    }
  },
  components: { RightMenu }
}
</script>

<style scoped>
.topbar {
  background: #fefefe !important;
  border: solid 1px rgba(160, 160, 160, 0.3);
}

.links {
  border-left: solid 1px rgba(160, 160, 160, 0.3);
  height: inherit;
  margin-left: 1.5em;
  overflow: hidden;
  padding-left: 1.5em;
}

.links .slim {
  border-left: solid 1px rgba(160, 160, 160, 0.3);
  line-height: 1;
  margin-left: 1em;
  padding-left: 1em;
}

.links .slim:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}

.topbar a,
.topbar h1 {
  text-decoration: none !important;
  color: black;
  font-family: Raleway, Helvetica, sans-serif !important;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.25em;
}

.slim {
  letter-spacing: 0.25em;
  font-weight: 100;
}
</style>
