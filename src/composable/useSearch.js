import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  computed,
} from "vue";

const useSearch = (props, emit) => {
  const inputValue = ref("");
  const openedModal = ref(false);
  const inputSearch = ref();
  const _icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });
  const iconContent = computed(() => _icons["../assets/icons/search.svg"] || "");
  
  const openModal = () => {
    _manageModal(true);
    _focusInput();
  };
  
  const search = (selectedResult = null) => {
    if (selectedResult && (selectedResult instanceof Event || (selectedResult?.target && selectedResult?.preventDefault))) {
      selectedResult = null;
    }

    if (!inputValue.value.trim() && !selectedResult) return;
    
    if (selectedResult) {
      emit("search", selectedResult);
      _manageModal(false);
      inputValue.value = "";
      return;
    }
    
    if (filterResults.value.length > 0) {
      emit("search", filterResults.value[0]);
      _manageModal(false);
      inputValue.value = "";
      return;
    }
    
    emit("search", inputValue.value.trim());
    _manageModal(false);
    inputValue.value = "";
  };
  
  const closeModal = () => {
    _manageModal(false);
  };
  
  const _manageModal = (state) => {
    openedModal.value = state;
  };
  
  const _focusInput = () => {
    nextTick(() => {
      inputSearch.value?.select();
    });
  };
  
  const _changeModalOpened = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      openModal();
    }
    if (event.key === "Escape" && openedModal.value) {
      closeModal();
    }
  };
  
  onMounted(() => {
    document.addEventListener("keydown", _changeModalOpened);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", _changeModalOpened);
  });
  
  const filterResults = computed(() => {
    if (inputValue.value.length < 1) return [];
    return props.results?.filter((result) =>
      result.title.toLowerCase().includes(inputValue.value.toLowerCase())
    ) || [];
  });
  
  const _convertHexToRgb = (hex) => {
    if (!hex || hex[0] !== "#") return hex;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };
  
  const custom = computed(() => {
    const { customStyles } = props;
    return customStyles
      ? {
        bgBody: { backgroundColor: `rgba(${_convertHexToRgb(customStyles.bgBody)}, 0.9)` },
        bgInput: {
          backgroundColor: customStyles.bgInput,
          boxShadow: `0 0 15px 0 ${customStyles.bgInput}`,
        },
        customButton: {
          backgroundColor: customStyles.bgButton || "#ef233c",
          color: customStyles.colorButton || "#f4faff",
        },
      }
      : {};
  });
  
  return {
    inputValue,
    inputSearch,
    openedModal,
    closeModal,
    openModal,
    search,
    filterResults,
    custom,
    iconContent,
  };
};

export default useSearch;
