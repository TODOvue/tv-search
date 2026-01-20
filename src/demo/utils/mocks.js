import Default from "./demos/default.vue?raw";
import CustomStyles from "./demos/customStyles.vue?raw";
import Slots from "./demos/slots.vue?raw";
import CustomKeys from "./demos/customKeys.vue?raw";
import CustomNoResults from "./demos/customNoResults.vue?raw";

const handleSearch = (event) => {
  console.log("Search executed:", event);
}

const results = [
  {
    id: 1,
    title: 'Blog - How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.blog/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'Blog - How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.blog/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'Blog - How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.blog/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'Blog - How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.blog/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'Blog - How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.blog/blog/how-to-use-vitesse',
  }
];

const resultHow = [
  {
    id: 1,
    title: 'How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.blog/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.blog/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.blog/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.blog/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.blog/blog/how-to-use-vitesse',
  }
];

export const demos = [
  {
    id: 1,
    title: "TvSearch Default",
    description: "Displays the default TvSearch layout with a placeholder and a list of results. Uses default colors and layout.",
    propsData: {
      placeholder: "Type 'How'...",
      titleButton: "Search",
      results: resultHow,
      onSearch: handleSearch,
    },
    html: Default,
  },
  {
    id: 2,
    title: "TvSearch custom styles",
    description: "Demonstrates how to override the default styles using the `customStyles` prop for input, button, and background colors.",
    propsData: {
      placeholder: "Type 'Blog'...",
      titleButton: "Search",
      results,
      customStyles: {
        bgBody: "#1e1d23",
        bgInput: "#8673a1",
        bgButton: "#80286e",
        colorButton: "#d7c9c9",
      },
      onSearch: handleSearch,
    },
    html: CustomStyles,
  },
  {
    id: 3,
    title: "TvSearch Slots",
    description: "Demonstrates how to use the `item` slot to customize result rendering and the `no-results` slot for empty states.",
    propsData: {
      placeholder: "Search with slots...",
      titleButton: "Search",
      results: [
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
      ],
      onSearch: handleSearch,
    },
    html: Slots,
  },
  {
    id: 4,
    title: "TvSearch Custom Keys",
    description: "Demonstrates how to use the `searchKeys` prop to search within multiple fields (e.g., matching text in 'description').",
    propsData: {
      placeholder: "Search by description...",
      titleButton: "Search",
      results: [
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
      ],
      searchKeys: ['title', 'description'],
      onSearch: handleSearch,
    },
    html: CustomKeys,
  },
  {
    id: 5,
    title: "TvSearch Custom No Results",
    description: "Demonstrates how to use the `noResultsText` prop to customize the 'No results found' message.",
    propsData: {
      placeholder: "Type something random...",
      titleButton: "Search",
      results: [
        {
          id: 1,
          title: "Vue 3",
        },
        {
          id: 2,
          title: "Vite",
        },
      ],
      noResultsText: "Sorry, we couldn't find any matches for",
      onSearch: handleSearch,
    },
    html: CustomNoResults,
  },
];
