<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import MenuList from "./components/MenuList.vue";
import Player from "./components/Player.vue";

import { mapStores, mapActions, mapState } from "pinia";

import { useMenuStore } from "./stores/menu";

export default {
  name: "App",
  computed: {
    ...mapState(useMenuStore, ["showMenu", "selected"]),
  },
  methods: {
    ...mapActions(useMenuStore, {
      toggleMenu: "toggleMenu",
      selectMenuItem: "selectMenuItem",
    }),
  },
  components: {
    Player,
    MenuItem,
    MenuList,
  },
};
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <!-- Header -->
    <header class="h-24">
      <nav
        class="h-24 bg-gray-950 flex flex-row items-center justify-between pl-5 pr-6 border-b border-gray-500 border-solid"
      >
        <div class="flex items-center gap-3">
          <button
            class="hover:cursor-pointer hover:bg-gray-800 rounded-full p-1"
            @click="toggleMenu"
          >
            <img src="./assets/icons/menu.svg" alt="menu" />
          </button>
          <RouterLink to="/" @click="() => selectMenuItem('home-menu')">
            <img src="/yt-music-logo.svg" />
          </RouterLink>
        </div>

        <RouterLink
          to="/login"
          class="border px-6 py-2 border-solid border-1 border-color-white"
          @click="() => selectMenuItem('login-menu')"
          >Login</RouterLink
        >
      </nav>
    </header>

    <!-- Main -->
    <main class="flex flex-1">
      <!-- Left - Menu Drawer -->
      <div
        v-show="showMenu"
        class="w-64 bg-gray-950 h-full mb-24 border-r border-gray-500 border-solid text-center pt-2"
      >
        <MenuList />
      </div>

      <!-- Rigth = RouterView -->
      <div class="flex-1 h-full">
        <RouterView />
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="h-24 bg-slate-900 flex items-center justify-center border-t border-gray-500 border-solid"
    >
      <!--Audio Player -->
      <div>
        <Player />
      </div>
    </footer>
  </div>
</template>
