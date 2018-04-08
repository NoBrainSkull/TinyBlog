<template>
    <v-layout row wrap>
      <v-container class="mt-0 pb-0 px-5">
        <v-layout v-if="isDesktop" column align-center justify-end class="max-width text-xs-right pt-4">
          <v-flex xs12 class="max-width title mr-4"><time datetime="2015-10-22">{{ date2Str(created_at) }}</time></v-flex>
          <v-flex xs12 class="max-width">
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <span class="subheading name">{{ author }}</span>
                </v-list-tile-content>
                <v-list-tile-avatar size="44px">
                  <img :src="avatar" alt="">
                </v-list-tile-avatar>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
        <v-layout v-else row wrap align-center justify-center class="text-xs-center subheading mb-5">
          <v-flex xs12 class="mb-3"><v-avatar :size="32"><img :src="avatar" alt=""></v-avatar></v-flex>
          <time class="published pr-2 bold" datetime="2015-10-22">{{ date2Str(created_at) }}</time>
          <span class="pl-2 ml-1">{{ author }}</span><img src="images/avatar.jpg" alt="" />
        </v-layout>
      </v-container>
    </v-layout>
</template>

<script>
  import calendar from '~/modules/dateUtils'
  import DeviceAware from '~/mixins/device-aware'

  export default {
    mixins: [DeviceAware],
    data() {
      return {
        created_at: new Date(),
        author: 'Blue Raven',
        avatar: 'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
      }
    },
    methods: {
      date2Str: datetime => {
        const date = calendar(datetime)
        return `${date.monthName} ${date.day}, ${date.year}`
      }
    }
  }
</script>

<style scoped>
  .published { border-right: dotted 1px rgba(160, 160, 160, 0.3); }
  .name {font-size: 0.8em!important;}
  .max-width {width: 100%;}
  .title {
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Raleway', 'sans-serif';
    letter-spacing: 0.1em!important;
    font-size: 0.9em!important;
  }
</style>
