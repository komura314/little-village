export default {
  computed: {
    isDark: {
      get() {
        return this.$vuetify.theme.dark
      },
    },
    getModeParams: {
      get() {
        return this.$vuetify.theme.dark
          ? this.$vuetify.theme.themes.dark
          : this.$vuetify.theme.themes.light
      },
    },
  },
  methods: {
    setMordInversion() {
      return (this.$vuetify.theme.dark = !this.$vuetify.theme.dark)
    },
  },
}
