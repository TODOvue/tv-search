<template>
  <TvSearch
    placeholder="Type something random..."
    titleButton="Search"
    :results="results"
    no-results-text="Sorry, we couldn't find any matches for"
    @search="onSearch"
  />
</template>

<script setup>
import { TvSearch } from "@todovue/tv-search";

const results = [
  {
    id: 1,
    title: "Vue 3",
  },
  {
    id: 2,
    title: "Vite",
  },
];

const onSearch = (val) => {
  console.log("Search:", val);
};
</script>
