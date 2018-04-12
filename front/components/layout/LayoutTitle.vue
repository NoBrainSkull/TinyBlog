<template>
	<v-container class="mt-3 mb-0 pb-0">
		<v-layout row wrap align-center justify-center :text-xs-center="isMobile">
			<v-flex xs12 class="mb-3"><v-avatar size="75em"><img :src="avatar" /></v-avatar></v-flex>
			<v-flex xs12 class="pt-4 pb-4"><h1 class="display-2">Future imperfect</h1></v-flex>
			<v-flex xs12><h1 class="headline">Another fine responsive site template by HTML5 UP</h1></v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import DeviceAware from '~/mixins/device-aware'

export default {
  mixins: [DeviceAware],
  data() {
    return {
      created_at: new Date(),
      author: 'Blue Raven',
      avatar:
        'https://png.pngtree.com/element_origin_min_pic/16/09/03/1257ca4f59e27e8.jpg'
    }
  }
}
</script>
