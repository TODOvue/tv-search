<template>
  <TvSearch
    placeholder="Search with slots..."
    titleButton="Search"
    :results="results"
    @search="onSearch"
  >
    <template #item="{ result }">
      <div class="custom-item">
        <strong>{{ result.title }}</strong>
        <span class="description">{{ result.description }}</span>
      </div>
    </template>
    <template #no-results>
      <div class="no-results">
        <p>No results found!</p>
        <span>Try a different search term.</span>
      </div>
    </template>
  </TvSearch>
</template>

<script setup>
import { TvSearch } from "@todovue/tv-search";

const results = [
  {
    id: 1,
    title: "Vue 3",
    description: "The progressive JavaScript framework",
  },
  {
    id: 2,
    title: "Vite",
    description: "Next Generation Frontend Tooling",
  },
];

const onSearch = (val) => {
  console.log("Search:", val);
};
</script>

<style scoped>
.custom-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.description {
  display: block;
  font-size: 0.8em;
  color: #666;
}
.no-results {
  text-align: center;
  padding: 20px;
  color: #888;
}
</style>
