import type { App, Plugin } from 'vue'
import _TvSearch from './components/TvSearch.vue'
import './style.scss'

const TvSearch = _TvSearch as typeof _TvSearch & Plugin;
TvSearch.install = (app: App) => {
  app.component('TvSearch', TvSearch)
};

export { TvSearch }

export const TvSearchPlugin: Plugin = {
  install: TvSearch.install
};
export default TvSearch;

declare module 'vue' {
  export interface GlobalComponents {
    TvSearch: typeof TvSearch;
  }
}
