<template>
  <v-date-picker
    v-model="date"
    color="blogCalendar"
    width="270"
    height="0"
    next-icon="arrow_right"
    prev-icon="arrow_left"
    locale="ja-jp"
    :day-format="(date) => new Date(date).getDate()"
    class="mb-5"
  ></v-date-picker>
</template>

<script>
import Mixin from '../plugins/mixin'
export default {
  mixins: [Mixin],
  data() {
    return {
      date: '',
    }
  },
}
</script>
