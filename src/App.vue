<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import Player from "./components/Player.vue";
</script>

<template>
  <header class="h-24">
    <nav
      class="h-24 bg-gray-950 flex flex-row items-center gap-6 pl-5 border-b border-gray-500 border-solid"
    >
      <div class="hover:cursor-pointer hover:bg-gray-800 rounded-full p-1">
        <img src="./assets/icons/menu.svg" alt="menu" />
      </div>
      <img src="/yt-music-logo.svg" />

      <RouterLink
        to="/"
        class="border px-6 py-2 border-solid border-1 border-color-white"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="border px-6 py-2 border-solid border-1 border-color-white"
        >About</RouterLink
      >
    </nav>
  </header>
  <div
    class="w-64 bg-gray-950 h-full mb-24 border-r border-gray-500 border-solid text-center pt-10"
  >
    <MenuItem name="Home" icon="source.." :isSelected="true" />
  </div>

  <RouterView class="fixed w-full left-64 top-24 pt-6 mb-24 pb-24 bg-red-300" />

  <footer
    class="fixed bottom-0 h-24 w-full bg-slate-900 flex border-t border-gray-500 border-solid"
  >
    <!-- Footer - Audio Player -->
    <div class="mx-auto">
      <Player />
    </div>
  </footer>
</template>
