<template>
  <v-container id="header">
    <top-bar :title="'Future Imperfect'">
      <div slot="top-bar-menu">
        <v-btn v-show="isDesktop" v-for="item in menuItems" v-bind:key="item" flat class="slim">{{ item }}</v-btn>
      </div>        
      <div slot="top-bar-actions">
        <v-btn flat icon class="mr-2"><v-icon>search</v-icon></v-btn>
      </div>
    </top-bar>
    <title-bloc v-if="isMobile"/>
    <v-container>
      <v-layout row wrap align-start justify-center>
        <v-flex class="mt-5" v-if="isDesktop" md12></v-flex>
        <v-flex v-if="isDesktop" md3>
          <v-layout row wrap align-start justify-center>
            <v-flex xs12><title-bloc/></v-flex>
            <v-flex xs11 class="h-separator mt-5"></v-flex>
            <v-flex xs12><recommendations /></v-flex>            
          </v-layout>
        </v-flex>
        <v-flex xs12 sm11 md8 offset-xs1>
          <v-content>
            <slot></slot>
          </v-content>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer app>
      <span>&copy; {{ new Date().getUTCFullYear() }}</span>
    </v-footer>
  </v-container>
</template>

<script>
	import DeviceAware from '~/mixins/device-aware'
  import TitleBloc from "~/components/layout/LayoutTitle"
  import TopBar from "~/components/layout/LayoutTopBar"
  import Recommendations from "~/components/layout/LayoutRecommendedPosts"

  export default { 
    components: { TopBar, TitleBloc, Recommendations },
    mixins: [DeviceAware],
    data () {
      return {
        menuItems : ['Lorem', 'Ipsum', 'Feugiat', 'tempus', 'adipiscing']
      }
    },
    computed: {
      isMobile() {
        return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
      },
      isDesktop() {
        return !(this.isMobile)
      }
    }
  }
</script>

<style>
  .raleway{
    font-family: 'Raleway', 'sans-serif'
  }

  .bold { font-weight: bold }

  .display-3 {
    font-family: 'Raleway', 'sans-serif';
    font-weight: bold;
    font-size: 3em!important;
    letter-spacing: 0.15em!important;
    text-transform: uppercase;
  }

  .display-1{
    font-family: 'Raleway', 'sans-serif';
    font-weight: bold;
    font-size: 1.5em!important;
    letter-spacing: 0.25em!important;
  }
  .headline {
    letter-spacing: 0.25em!important;
    font-size: 1em!important;
    text-transform: uppercase;
  }

  .subheading{
    letter-spacing: 0.25em!important;
    font-size: 0.6em!important;
    text-transform: uppercase;
  }

  .v-separator {
    border-right: dotted 1px rgba(160, 160, 160, 0.8);
    width: 1px;
    height: 12px;
  }

  .h-separator {
    border-bottom: solid 1px rgba(160, 160, 160, 0.4);
    width: 100%;
    height: 1px;
  }

  .h-spacer {
    width: 100%;
    height: 1px;
  }
</style>