import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-search',
    configKey: 'tvSearch'
  },
  setup(_options, nuxt) {
    const searchCss = '@todovue/tv-search/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(searchCss);
    pushUnique(buttonCss);
  }
})
