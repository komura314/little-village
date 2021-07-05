<template>
  <v-row>
    <v-col cols="9"><BlogCard /> </v-col>
    <v-col cols="3">
      <BlogCalendar />
      <BlogCategory />
    </v-col>
  </v-row>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import BlogCalendar from '../components/BlogCalendar.vue'
import BlogCategory from '../components/BlogCategory.vue'
export default {
  components: {
    BlogCard,
    BlogCalendar,
    BlogCategory,
  },
}
</script>
