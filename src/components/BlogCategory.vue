<template>
  <v-card>
    <v-toolbar flat>Category</v-toolbar>
    <v-list dense>
      <v-list-item-group v-model="selectedItem" color="blogCategory">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.text + ' (' + item.count + ')'">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: undefined,
    items: [
      { text: '日記', count: 1 },
      { text: '開発環境構築記録', count: 13 },
      { text: '技術情報', count: 2 },
      { text: 'エラー調査', count: 1 },
      { text: '技術書', count: 1 },
    ],
  }),
}
</script>
