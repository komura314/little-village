export default {
  computed: {
    isDark: {
      get() {
        return this.$vuetify.theme.dark
      },
    },
  },
  methods: {
    setMordInversion() {
      return (this.$vuetify.theme.dark = !this.$vuetify.theme.dark)
    },
  },
}
