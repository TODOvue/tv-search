<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Search
###### TvSearch provides a fast, accessible, and fully customizable search interface for Vue 3 apps.

[![npm](https://img.shields.io/npm/v/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search) [![Netlify Status](https://api.netlify.com/api/v1/badges/c6992bf1-ed06-4d9b-8b77-752254880951/deploy-status)](https://app.netlify.com/sites/tv-search/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search) [![npm](https://img.shields.io/npm/dt/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search) ![GitHub](https://img.shields.io/github/license/TODOvue/tv-search) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/tv-search)

## Table of Contents
- [Demo](https://tv-search.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/tv-search/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/tv-search/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/tv-search/search/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tv-search
```
```bash
yarn add @todovue/tv-search
```
Import
```js
import TvSearch from '@todovue/tv-search'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvSearch from '@todovue/tv-search'

const app = createApp(App);
app.component("TvSearch", TvSearch);
app.mount("#app");
```
---
## Usage
You can open the search component with `Ctrl + k` or `Command + k`
```js
<template>
  <tv-search
    placeholder="Search blog..."
    titleButton="Search"
    :results="results"
  />
</template>

<script setup>
  import { ref } from 'vue';
  import TvSearch from '@todovue/tv-search';
  
  const results = ref([
  {
    id: 1,
    title: 'How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.com/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.com/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.com/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.com/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.com/blog/how-to-use-vitesse',
  }
  ]);
</script>
```
---
## Props
| Name         | Type   | Default                    | Description       | Required |
|--------------|--------|----------------------------|-------------------|----------|
| placeHolder  | String | `""`                       | Placeholder input | `true`   |
| titleButton  | String | `""`                       | Title button      | `true`   |
| results      | Array  | `[]`                       | Array of results  | `true`   |
| customStyles | Object | [See below](#customStyles) | Custom styles     | `false`  |

### customStyles
| Name        | Type   | Default     | Description             |
|-------------|--------|-------------|-------------------------|
| bgBody      | String | `"#0E131F"` | Background color body   |
| bgInput     | String | `"#B9C4DF"` | Background color input  |
| bgButton    | String | `"#Ef233C"` | Background color button |
| colorButton | String | `"#F4FAFF"` | Color button            |
---
## Events
| Name   | Description                       |
|--------|-----------------------------------|
| search | Event when the search is executed |

## Customize
You can customize the component by customStyles, you can see the [props](#props) section to see the available options
```js
const customStyles = {
  bgBody: "#0A4539",
  bgInput: "#284780",
  bgButton: "#80286E",
  colorButton: "#D5B7B7",
};
```
```js
<template>
  <tv-search
    placeholder="Search blog..."
    titleButton="Search"
    :results="results"
    :customStyles="customStyles"
  />
</template>

<script setup>
  import { ref } from 'vue';
  import TvSearch from '@todovue/tv-search';
  
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
```
## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/tv-search.git
cd tv-search
yarn install
```
---
## License
[MIT](https://github.com/TODOvue/tv-search/blob/main/LICENSE)
