<script setup>
import TvButton from "@todovue/tv-button";
import useSearch from "../composable/useSearch.js";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  titleButton: {
    type: String,
    default: "",
  },
  results: {
    type: Array,
    default: () => [],
  },
  customStyles: {
    type: Object,
    default: () => ({}),
  },
})

const emits = defineEmits(["search"]);

const {
  inputValue,
  inputSearch,
  openedModal,
  closeModal,
  openModal,
  search,
  filterResults,
  custom,
  iconContent,
} = useSearch(props, emits);
</script>

<template>
  <div class="tv-search">
    <i class="tv-cursor-pointer tv-search-icon" v-html="iconContent" @click="openModal"></i>
  </div>
  <div
    v-if="openedModal"
    class="tv-search-modal"
    @click.self="closeModal"
    :style="custom.bgBody"
  >
    <div class="tv-search-modal-content" :style="custom.bgInput">
      <div class="tv-search-modal-content-input">
        <input
          type="text"
          v-model="inputValue"
          @keyup.enter="search"
          :placeholder="placeholder"
          class="tv-search-input"
          :class="{ 'tv-radius-none-bl': filterResults.length >= 1 }"
          ref="inputSearch"
        />
        <tv-button
          runded
          icon="search"
          icon-position="left"
          @click="search"
          :class="{ 'tv-radius-none-br': filterResults.length >= 1 }"
          :customStyle="custom.customButton"
        >
          {{ titleButton }}
        </tv-button>
      </div>
      <div class="tv-search-results" v-if="filterResults.length >= 1">
        <template v-for="result in filterResults" :key="result.id">
          <p class="tv-search-results-title tv-cursor-pointer" @click="search">
            {{ result.title }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../assets/scss/style.scss";
</style>
