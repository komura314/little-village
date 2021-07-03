<template>
  <div>
    <v-toolbar color="backgroundHeader" flat>
      <v-btn plain text to="/">
        <span class="material-icons mr-3">holiday_village</span>
        <v-toolbar-title>
          <span class="button_text">Little Village</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer />
      <v-btn icon @click="setMordInversion()">
        <span v-if="isDark" class="material-icons">dark_mode</span>
        <span v-else class="material-icons">light_mode</span>
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
        { value: 'brog', to: '/', disp: 'Brog' },
        { value: 'about', to: '/about', disp: 'About' },
        { value: 'contact', to: '/contact', disp: 'Contact' },
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
