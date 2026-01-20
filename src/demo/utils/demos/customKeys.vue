<template>
  <TvSearch
    placeholder="Search by description (e.g. 'framework')..."
    titleButton="Search"
    :results="results"
    :search-keys="['title', 'description']"
    @search="onSearch"
  />
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
  {
    id: 3,
    title: "Pinia",
    description: "The Vue Store that you will enjoy using",
  },
];

const onSearch = (val) => {
  console.log("Search:", val);
};
</script>
