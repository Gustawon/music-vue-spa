import { defineStore } from "pinia";
import { ref } from "vue";

import { Menu } from "../types/menu";

export const useMenuStore = defineStore("menu", () => {
  const showMenu = ref(true);
  const selected = ref(Menu.home as string);

  function toggleMenu() {
    showMenu.value = !showMenu.value;
  }

  function selectMenuItem(name: string) {
    selected.value = name;
  }

  return { showMenu, selected, toggleMenu, selectMenuItem };
});
