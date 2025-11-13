<template>
  <!-- You can open the search component with Ctrl + k or Command + k -->
  <tv-search
    placeholder="Type 'Blog'..."
    titleButton="Search"
    :results="results"
    :customStyles="customStyles"
    @search="console.log('Searching for:', $event)"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvSearch } from '@todovue/tv-search';

const customStyles = ref({
  bgBody: "#0A4539",
  bgInput: "#284780",
  bgButton: "#80286E",
  colorButton: "#D5B7B7",
});

const results = ref([
  {
    id: 1,
    title: 'Blog - How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.com/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'Blog - How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.com/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'Blog - How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.com/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'Blog - How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.com/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'Blog - How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.com/blog/how-to-use-vitesse',
  }
]);
</script>
