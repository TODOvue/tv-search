<script setup>
import { TvButton } from "@todovue/tv-button";
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
  searchKeys: {
    type: Array,
    default: () => ["title"],
  },
  noResultsText: {
    type: String,
    default: "No results found for",
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
          @keyup.enter="search()"
          :placeholder="placeholder"
          class="tv-search-input"
          :class="{ 'tv-radius-none-bl': filterResults.length >= 1 }"
          ref="inputSearch"
        />
        <tv-button
          runded
          icon="search"
          icon-position="left"
          @click="search()"
          :class="{ 'tv-radius-none-br': filterResults.length >= 1 }"
          :customStyle="custom.customButton"
        >
          {{ titleButton }}
        </tv-button>
      </div>
      <div class="tv-search-results" v-if="filterResults.length >= 1">
        <template v-for="result in filterResults" :key="result.id">
          <div @click="search(result)" class="tv-cursor-pointer">
            <slot name="item" :result="result">
              <p class="tv-search-results-title">
                {{ result.title }}
              </p>
            </slot>
          </div>
        </template>
      </div>
      <div v-else-if="inputValue" class="tv-search-no-results">
        <slot name="no-results">
          <p>{{ noResultsText }} "{{ inputValue }}"</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style></style>
