<template>
  <v-app>
    <v-content>
      <v-container>
        <Header />
      </v-container>
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
    </v-content>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>
