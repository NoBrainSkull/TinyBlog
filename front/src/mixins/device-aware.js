export default {
  computed: {
    isMobile() {
      return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    },
    isDesktop() {
      return !(this.isMobile)
    }
  }
}