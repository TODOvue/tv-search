# Changelog

All notable changes to `@todovue/tv-search` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---
## [1.0.2] - 2025-10-17
### 🛠️ Changed
- The library build now uses `src/entry.ts` (exports both the component and the plugin) instead of directly exporting the `.vue` file.
- CSS injection via JS has been removed for the library build (it is only kept for the demo), generating a `tv-search.css` file optimized for SSR/Nuxt.
- Changed node-version to workflows release.yml to 20.

### ✨ Added
- Plugin installation support: `app.use(TvSearch)` or `app.use(TvSearchPlugin)`.
- Explicit export of the style file: `import '@todovue/tv-search/style.css'`.
- Documentation for usage in SSR and Nuxt 3 applications.

## [1.0.1] - 2025-05-07
### 🐛 Bug Fixes
- Rename `global.scss` to `_global.scss`
- Update imports in component

## [1.0.0] - 2025-05-06

### ✨ Features

- Initial release of `TvSearch` component.
- Added support for `Ctrl + K` / `⌘ + K` keyboard shortcuts to open the search modal.
- Supports customizable search result list via `results` prop.
- Allows overriding styles with `customStyles` prop.
- Emits `search` event on form submission.
- Full keyboard accessibility and responsive design.
- Easy integration into any Vue 3 application.
- Published to [npm](https://www.npmjs.com/package/@todovue/tv-search) under the `@todovue` namespace.

[1.0.2]: https://github.com/TODOvue/tv-button/pull/4/files
[1.0.1]: https://github.com/TODOvue/tv-button/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-button/pull/2/files
