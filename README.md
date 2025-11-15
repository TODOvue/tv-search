<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Search (TvSearch)
A fast, accessible, and fully customizable search interface component for Vue 3 applications. Provides an elegant modal search experience with keyboard shortcuts, real-time filtering, and complete style customization. Works seamlessly in Single Page Apps or Server-Side Rendered (SSR) environments (e.g. Nuxt 3).

[![npm](https://img.shields.io/npm/v/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c6992bf1-ed06-4d9b-8b77-752254880951/deploy-status)](https://app.netlify.com/projects/tv-search-demo/deploys)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-search.svg)](https://www.npmjs.com/package/@todovue/tv-search)
![License](https://img.shields.io/github/license/TODOvue/tv-search)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-search)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-search)
![Node Version](https://img.shields.io/node/v/@todovue/tv-search)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-search)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-search?style=social)

> Demo: https://tv-search-demo.netlify.app/

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Results Data Structure](#results-data-structure)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Roadmap](#roadmap)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---
## Features
- **Keyboard-first UX**: Open with `Ctrl+K` / `Cmd+K`, close with `Esc`
- **Real-time filtering**: Search as you type with instant results
- **Modal interface**: Clean overlay design that focuses user attention
- **Fully customizable**: Override colors for body, input, button, and text
- **Accessible**: Built with semantic HTML and keyboard navigation
- **Lightweight**: Minimal dependencies, Vue 3 marked as peer dependency
- **SSR compatible**: Works in Nuxt 3 and other SSR frameworks
- **Auto-focus**: Input field receives focus automatically when opened
- **Click-away close**: Modal closes when clicking outside the content area
- **Flexible results**: Pass any array of searchable items with custom properties

---
## Installation
Using npm:
```bash
npm install @todovue/tv-search
```
Using yarn:
```bash
yarn add @todovue/tv-search
```
Using pnpm:
```bash
pnpm add @todovue/tv-search
```

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import { TvSearch } from '@todovue/tv-search'

createApp(App)
  .use(TvSearch) // enables <TvSearch /> globally
  .mount('#app')
```

Alternatively, register as a component:
```js
import { createApp } from 'vue'
import App from './App.vue'
import { TvSearch } from '@todovue/tv-search'

const app = createApp(App)
app.component('TvSearch', TvSearch)
app.mount('#app')
```

Local import inside a component:
```vue
<script setup>
import { ref } from 'vue'
import { TvSearch } from '@todovue/tv-search'

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
])

function handleSearch(query) {
  console.log('Search query:', query)
  // Handle search logic here
}
</script>

<template>
  <tv-search
    placeholder="Search documentation..."
    titleButton="Search"
    :results="results"
    @search="handleSearch"
  />
</template>
```

---
## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-search.client.ts` (client-only is recommended since it uses keyboard events):
```ts
import { defineNuxtPlugin } from '#app'
import { TvSearch } from '@todovue/tv-search'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('TvSearch', TvSearch)
})
```

Or use the plugin install method:
```ts
import { defineNuxtPlugin } from '#app'
import { TvSearch } from '@todovue/tv-search'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvSearch)
})
```

Then use anywhere in your Nuxt app:
```vue
<template>
  <tv-search
    placeholder="Search site..."
    titleButton="Search"
    :results="searchResults"
    @search="onSearch"
  />
</template>

<script setup>
const searchResults = ref([
  // your search results
])

function onSearch(query) {
  // handle search
}
</script>
```

Optional direct import (no plugin needed):
```vue
<script setup>
import { TvSearch } from '@todovue/tv-search'
</script>
```

---
## Component Registration Options
| Approach                                             | When to use                                        |
|------------------------------------------------------|----------------------------------------------------|
| Global via `app.use(TvSearch)`                       | Design system / used across many pages             |
| Global via `app.component('TvSearch', TvSearch)`     | Custom component name / multiple search components |
| Local named import `import TvSearch from '...'`      | Single page usage / code splitting                 |
| Nuxt plugin `.client.ts`                             | SSR apps with client-side interactions             |

---
## Props
| Prop         | Type   | Default | Description                                                                           | Required |
|--------------|--------|---------|---------------------------------------------------------------------------------------|----------|
| placeholder  | String | `""`    | Placeholder text for the search input field                                           | `true`   |
| titleButton  | String | `""`    | Text displayed on the search button                                                   | `true`   |
| results      | Array  | `[]`    | Array of searchable items (see [Results Data Structure](#results-data-structure))     | `true`   |
| customStyles | Object | `{}`    | Custom color scheme for theming (see [Customization](#customization-styles--theming)) | `false`  |

### customStyles Object
Customize the appearance by passing a `customStyles` object with any of these properties:

| Property    | Type   | Default     | Description                                              |
|-------------|--------|-------------|----------------------------------------------------------|
| bgBody      | String | `"#0E131F"` | Background color of the modal overlay (with 0.9 opacity) |
| bgInput     | String | `"#B9C4DF"` | Background color of the search input area                |
| bgButton    | String | `"#EF233C"` | Background color of the search button                    |
| colorButton | String | `"#F4FAFF"` | Text color of the search button                          |

---
## Events
| Event  | Payload Type | Description                                                                                     |
|--------|--------------|-------------------------------------------------------------------------------------------------|
| search | String       | Emitted when search is triggered (Enter key or button click). Returns the trimmed search query. |

Example:
```vue
<tv-search
  placeholder="Search..."
  titleButton="Go"
  :results="items"
  @search="handleSearch"
/>

<script setup>
function handleSearch(query) {
  console.log('User searched for:', query)
  // Perform API call, route navigation, etc.
}
</script>
```

---
## Keyboard Shortcuts
| Shortcut               | Action                            |
|------------------------|-----------------------------------|
| `Ctrl + K` / `Cmd + K` | Open the search modal             |
| `Escape`               | Close the search modal            |
| `Enter`                | Execute search with current input |
| Click outside modal    | Close the search modal            |

---
## Customization (Styles / Theming)
You can override the default color scheme by passing a `customStyles` object:

```vue
<script setup>
import { ref } from 'vue'
import { TvSearch } from '@todovue/tv-search'

const customStyles = ref({
  bgBody: "#1e1d23",
  bgInput: "#8673a1",
  bgButton: "#80286e",
  colorButton: "#d7c9c9",
})

const results = ref([
  // your results
])
</script>

<template>
  <tv-search
    placeholder="Type to search..."
    titleButton="Search"
    :results="results"
    :customStyles="customStyles"
  />
</template>
```

### Example Custom Themes

**Dark Theme:**
```js
const darkTheme = {
  bgBody: "#0E131F",
  bgInput: "#1F2937",
  bgButton: "#3B82F6",
  colorButton: "#FFFFFF",
}
```

**Light Theme:**
```js
const lightTheme = {
  bgBody: "#F9FAFB",
  bgInput: "#FFFFFF",
  bgButton: "#6366F1",
  colorButton: "#FFFFFF",
}
```

**Brand Theme:**
```js
const brandTheme = {
  bgBody: "#0A4539",
  bgInput: "#284780",
  bgButton: "#80286E",
  colorButton: "#D5B7B7",
}
```

---
## Results Data Structure
The `results` prop expects an array of objects with the following structure:

```typescript
interface SearchResult {
  id: number | string;    // Unique identifier (required for :key)
  title: string;          // Displayed in search results (required)
  description?: string;   // Additional info (optional, not currently displayed)
  url?: string;           // Navigation target (optional, not currently used in component)
  [key: string]: any;     // Any additional custom properties
}
```

Example:
```js
const results = [
  {
    id: 1,
    title: 'Getting Started with Vue 3',
    description: 'Learn the basics of Vue 3 composition API',
    url: '/docs/vue3-intro',
    category: 'Tutorial',
  },
  {
    id: 2,
    title: 'Understanding Reactivity',
    description: 'Deep dive into Vue reactivity system',
    url: '/docs/reactivity',
    category: 'Advanced',
  },
]
```

**Note**: The component currently filters results based on the `title` property matching the user input (case-insensitive). You can handle the `@search` event to implement custom search logic or navigation.

---
## Accessibility
- **Keyboard navigation**: Full support for `Ctrl+K`/`Cmd+K` to open, `Esc` to close, and `Enter` to search
- **Focus management**: Input automatically receives focus when modal opens and is selected for immediate typing
- **Semantic HTML**: Uses proper `<button>`, `<input>`, and modal structure
- **Click-away**: Modal closes when clicking the overlay, providing intuitive UX

**Recommendations:**
- Provide clear, descriptive `placeholder` text
- Use meaningful `titleButton` text (e.g., "Search", "Find", "Go")
- Ensure sufficient color contrast when using `customStyles`
- Consider adding `aria-label` attributes for screen reader support in future versions

---
## SSR Notes
- **Safe for SSR**: No direct DOM access (`window` / `document`) during module initialization
- **Event listeners**: Keyboard event listeners are registered in `onMounted` and cleaned up in `onBeforeUnmount`
- **Client-side only**: Keyboard shortcuts require browser environment; use `.client.ts` plugin in Nuxt
- **Icons**: SVG icons are loaded via Vite's `import.meta.glob`, which works in both SPA and SSR builds
- **CSS Import**: Starting from version 1.0.4, styles are served as a separate CSS file (`dist/tv-search.css`) and must be explicitly imported:
  - For Vue/Vite SPA: `import '@todovue/tv-search/style.css'` in `main.ts`
  - For Nuxt 3/4: Add `'@todovue/tv-search/style.css'` to the `css` array in `nuxt.config.ts`

---
## Roadmap
| Feature                                  | Status      |
|------------------------------------------|-------------|
| Support for result `url` navigation      | Planned     |
| Display `description` in results         | Planned     |
| Customizable search icon                 | Planned     |
| Multiple keyboard shortcut options       | Considering |
| Result categorization / grouping         | Considering |
| Highlight matching text in results       | Considering |
| Recent searches history                  | Considering |
| Loading state indicator                  | Considering |
| Pagination for large result sets         | Considering |
| Fuzzy search / advanced filtering        | Considering |
| Theming via CSS variables                | Considering |
| TypeScript type definitions improvement  | Planned     |
| ARIA attributes enhancement              | Planned     |

---
## Development
Clone the repository and install dependencies:
```bash
git clone https://github.com/TODOvue/tv-search.git
cd tv-search
yarn install
```

Run development server with demo playground:
```bash
yarn dev
```

Build the library:
```bash
yarn build
```

Build demo site:
```bash
yarn build:demo
```

The demo is served from Vite using `index.html` + `src/demo` examples.

---
## Contributing
Contributions are welcome! Please read our [Contributing Guidelines](https://github.com/TODOvue/tv-search/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/TODOvue/tv-search/blob/main/CODE_OF_CONDUCT.md) before submitting PRs.

**How to contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
## Changelog
See [CHANGELOG.md](https://github.com/TODOvue/tv-search/blob/main/CHANGELOG.md) for release history and version changes.

---
## License
[MIT](https://github.com/TODOvue/tv-search/blob/main/LICENSE) © TODOvue

---
### Attributions
Crafted for the TODOvue component ecosystem
