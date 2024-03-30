<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="h-24">
    <nav
      class="h-24 bg-gray-950 flex flex-row items-center gap-6 pl-6 border-b border-gray-500 border-solid"
    >
      <img src="./assets/menu.svg" alt="menu" />
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
    SideBar - App drawer
  </div>

  <RouterView class="fixed w-full left-64 top-24 pt-6 mb-24 pb-24 bg-red-300" />

  <footer
    class="fixed bottom-0 h-24 w-full bg-slate-900 flex border-t border-gray-500 border-solid"
  >
    <div class="border-2 h-12 my-auto mx-auto align-middle p-2">
      Footer - Audio Player
    </div>
  </footer>
</template>
