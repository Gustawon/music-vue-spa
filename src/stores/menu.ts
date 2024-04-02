import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore("menu", () => {
  const showMenu = ref(true);
  const selected = ref("home");

  function toggleMenu() {
    showMenu.value = !showMenu.value;
  }

  function selectMenuItem(name: string) {
    selected.value = name;
  }

  return { showMenu, selected, toggleMenu, selectMenuItem };
});
