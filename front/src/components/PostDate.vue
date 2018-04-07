<template>
    <v-layout row wrap>
      <v-container class="dateBox my-0 px-5 text-xs-center text-md-right">
        <v-layout v-if="isDesktop" column align-center class="desktop-datebox text-xs-right pt-4 pr-5">
          <v-flex xs12><time datetime="2015-10-22">{{ date2Str(created_at) }}</time></v-flex>
          <v-flex xs12>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar size="46px">
                  <img :src="avatar" alt="">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  {{ author }}
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
        <v-layout v-else row wrap align-center justify-center class="text-xs-center subheading">
          <v-flex xs12 class="mb-3"><v-avatar :size="64"><img :src="avatar" alt=""></v-avatar></v-flex>
          <time class="published pr-2 bold" datetime="2015-10-22">{{ date2Str(created_at) }}</time>
          <a href="#" class="author pl-2 ml-1"><span class="name">{{ author }}</span><img src="images/avatar.jpg" alt="" /></a>
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
  .desktop-datebox { width: 100%; }
  .published { border-right: dotted 1px rgba(160, 160, 160, 0.3); }
</style>
