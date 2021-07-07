<template>
  <div>
    <v-toolbar color="backgroundHeader" flat>
      <v-btn plain text to="/">
        <v-icon class="mr-3">holiday_village</v-icon>
        <v-toolbar-title>
          <span class="button_text">Little Village</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer />
      <v-btn icon @click="setMordInversion()">
        <v-icon v-if="isDark">dark_mode</v-icon>
        <v-icon v-else>light_mode</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar color="backgroundMenu" dense flat>
      <v-spacer />
      <v-btn-toggle v-model="menu_selected" tile group>
        <v-btn
          v-for="button in menu_buttons"
          :key="button.id"
          :value="button.value"
          :to="button.to"
        >
          <span class="button_text">{{ button.disp }}</span>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
  </div>
</template>
<script>
import Mixin from '../plugins/mixin'

export default {
  mixins: [Mixin],
  data() {
    return {
      menu_selected: 0,
      menu_buttons: [
        { id: 0, value: 'brog', to: '/', disp: 'Brog' },
        { id: 1, value: 'about', to: '/about', disp: 'About' },
        { id: 2, value: 'contact', to: '/contact', disp: 'Contact' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.button_text {
  font-family: 'Roboto Mono', sans-serif;
  font-weight: bold;
  text-transform: none;
}
</style>
