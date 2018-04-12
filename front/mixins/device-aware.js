export default {
  computed: {
    isMobile() {
      return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    },
    isDesktop() {
      return !this.isMobile
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.name)
  }
}
