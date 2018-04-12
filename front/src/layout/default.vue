<template>
  <v-container id="header" class="px-0 mx-0">
    <top-bar :title="'Future Imperfect'" :items="menuItems">
      <div slot="top-bar-actions">
        <div class="bl px-1">
          <v-btn flat icon><v-icon class="grey--text">search</v-icon></v-btn>
        </div>
      </div>
    </top-bar>
    <title-bloc v-if="isMobile"/>
    <v-container class="px-0 mx-0">
      <v-layout row wrap align-start justify-center>
        <v-flex class="mt-5" v-if="isDesktop" md12></v-flex>
        <v-flex v-if="isDesktop" md3 offset-md1>
          <v-layout row wrap align-start justify-center>
            <v-flex xs12><title-bloc/></v-flex>
            <v-flex xs11 class="h-separator mt-5"></v-flex>
            <v-flex xs12><recommendations /></v-flex>     
            <v-flex xs11 class="h-separator my-5"></v-flex>
            <about />
            <v-flex xs11 class="h-separator my-5"></v-flex>
            <rights />
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md7 offset-md1>
          <v-content>
            <slot></slot>
          </v-content>
          <pagination />
        </v-flex>
        <v-layout row wrap align-start justify-center v-if="isMobile">
          <v-flex xs11 class="h-separator my-5"></v-flex>
          <v-flex xs11><recommendations /></v-flex>
          <v-flex xs11 class="h-separator my-5"></v-flex>
          <v-flex xs11><about /></v-flex>
          <v-flex xs11 class="h-separator my-5"></v-flex>
          <v-flex xs11><rights /></v-flex>
        </v-layout>
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
  import About from "~/components/layout/LayoutAbout"
  import Recommendations from "~/components/layout/LayoutRecommendations"
  import Rights from "~/components/layout/LayoutRights"
  import Pagination from "~/components/layout/LayoutPagination"
  import menuItems from '#/json/menu'

  export default { 
    components: { TopBar, TitleBloc, Recommendations, About, Rights, Pagination },
    mixins: [DeviceAware],
    data: () => ({ menuItems })
  }
</script>

<style>
  .application.theme--light {
    background-color: #fafbfd!important;
    -webkit-text-size-adjust: none!important;
  }

  .raleway{
    font-family: 'Raleway', 'sans-serif'
  }

  .br{
    border-right: solid 1px rgba(160, 160, 160, 0.3);
  }
  .bl{
    border-left: solid 1px rgba(160, 160, 160, 0.3);
  }
  .bt{
    border-top: solid 1px rgba(160, 160, 160, 0.3);
  }
  .bb{
    border-bottom: solid 1px rgba(160, 160, 160, 0.3);
  }

  .hand { cursor: pointer }

  .bold { font-weight: bold }

  .display-3 {
    font-family: 'Raleway', 'sans-serif';
    font-weight: bold;
    font-size: 3em!important;
    letter-spacing: 0.15em!important;
    text-transform: uppercase;
    color: #3c3b3b!important;
  }

  .display-2{
    font-family: 'Raleway', 'sans-serif';
    font-weight: bold;
    font-size: 2.5em!important;
    letter-spacing: 0.15em!important;
    text-transform: uppercase;
    color: #3c3b3b!important;
  }

  .display-1{
    font-family: 'Raleway', 'sans-serif';
    font-weight: bold;
    font-size: 1.5em!important;
    letter-spacing: 0.25em!important;
    color: #3c3b3b!important;
  }

  .headline {
    letter-spacing: 0.25em!important;
    font-size: 1em!important;
    text-transform: uppercase;
    color: #646464!important;
    font-weight: 400!important;
    line-height: 2.5!important;
  }

  .title {
    text-transform: uppercase;
    font-family: 'Raleway';
    font-size: 1em!important;
    color: #3c3b3b!important;
  }

  .subheading{
    letter-spacing: 0.25em!important;
    font-size: 0.9em!important;
    text-transform: uppercase;
    color: #646464!important;
    font-weight: 400!important;
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

  .body-1, .body-2, p {
    font-family: "Source Sans Pro", "Helvetica", "sans-serif";
  }

  .body-2 {
    font-size: 1.1em!important;
    color: #646464;
  }

  .image {
    max-width:100%;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    resize: both;
    height: auto;
  }

  a {
    -moz-transition: color 0.2s ease, border-bottom-color 0.2s ease;
    -webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
    -ms-transition: color 0.2s ease, border-bottom-color 0.2s ease;
    transition: color 0.2s ease, border-bottom-color 0.2s ease;
    border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
    color: inherit;
    text-decoration: none;
  }

  .big-button {
    border: solid 1px rgba(160, 160, 160, 0.3)!important;
    letter-spacing: 0.25em!important;
    font-weight: 600;
    font-size: 0.9em;
    color: #3c3b3b!important;
    width: 20em;
    height: 4.5em;
  }
</style>