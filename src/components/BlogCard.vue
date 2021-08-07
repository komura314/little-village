<template>
  <div>
    <v-row v-for="item in items" :key="item.blogId" class="mb-4">
      <v-col>
        <v-card elevation="1" tile>
          <v-row>
            <v-col cols="4" class="pl-10">
              <v-img
                max-height="175"
                max-width="245"
                :src="item.imagePath !== '' ? item.imagePath : NO_IMAGE_PATH"
              />
            </v-col>
            <v-col cols="8">
              <v-card-title class="blogCardTitle--text">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle class="blogCardSubtitle--text">
                {{ item.datetime }}
                <span class="ml-3">
                  {{ item.category }}
                </span>
              </v-card-subtitle>
              <v-card-text class="blogCardText--text ml-3 pr-10 caption">
                {{ item.text }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
      color="blogPagenation"
      next-icon="navigate_next"
      prev-icon="navigate_before"
    ></v-pagination>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import Mixin from '../plugins/mixin'

export default {
  mixins: [Mixin],
  data() {
    return {
      NO_IMAGE_PATH: '/images/no_image_white.png',
      ITEM_SAMPLE: {
        imagePath: '',
        title: '１２３４５６７８９十１２３４５６７８二十１２３４５',
        datetime: 'YYYY/MM/DD HH:mm:ss',
        category: '〈１２３４５６７８９十〉',
        text: '１２３４５６７８９十１２３４５６７８二十１２３４５６７８三十１２３４５６７８四十１２３４５６７８五十１２３４５６７８六十１２３４５６７８七十１２３４５６７８八十１２３４５６７８九十１２３４５６７８９百１２３４５６７８百十１２３４５６７百二十１２３４５６７百三十１２３４５６７百四十',
      },
      items: [],
      page: 1,
    }
  },
  created() {
    this.items = []
    for (let i = 0; i < 3; i++) {
      const item = cloneDeep(this.ITEM_SAMPLE)
      item.blogId = i
      this.items.push(item)
    }
  },
}
</script>
