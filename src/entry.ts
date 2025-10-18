import TvSearch from './components/TvSearch.vue'

(TvSearch as any).install = (app: any) => {
  app.component('TvSearch', TvSearch)
};

export const TvSearchPlugin = {
  install(app: any) {
    app.component('TvSearch', TvSearch)
  }
}


export { TvSearch }
export default TvSearch
