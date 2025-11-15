<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvSearch = defineAsyncComponent(() => import('../components/TvSearch.vue'))
</script>

<template>
  <tv-demo
    :component="TvSearch"
    :variants="demos"
    nameComponent="TvSearch"
    npmInstall="@todovue/tv-search"
    sourceLink="https://github.com/TODOvue/tv-search"
    urlClone="https://github.com/TODOvue/tv-search.git"
    version="1.0.4"
  />
</template>
<style scoped>

</style>
