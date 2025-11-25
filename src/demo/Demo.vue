<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvSearch = defineAsyncComponent(() => import('../components/TvSearch.vue'))
</script>

<template>
  <TvDemo
    :component="TvSearch"
    :variants="demos"
    hide-background
    component-name="TvSearch"
    npm-install="@todovue/tv-search"
    source-link="https://github.com/TODOvue/tv-search"
    url-clone="https://github.com/TODOvue/tv-search.git"
    version="1.1.1"
  />
</template>
<style scoped>

</style>
