<script setup lang="ts">
defineProps<{ name: string; icon: string; isSelected: boolean }>();
</script>

<template>
  <div class="w-full h-12 mb-4">
    <div
      class="flex align-center h-full pl-4 gap-4 rounded-md bg-gray-800 hover:bg-gray-800 hover:cursor-pointer mx-2"
      :class="{}"
    >
      <img src="../assets/icons/home_filled.svg" height="32" width="32" />

      <div class="my-auto">{{ name }}</div>
    </div>
  </div>
  <div class="w-full h-12 mb-4">
    <div
      class="flex align-center h-full pl-4 gap-4 rounded-md mx-2 hover:bg-gray-800 hover:cursor-pointer"
      :class="{}"
    >
      <img src="../assets/icons/explore.svg" height="32" width="32" />

      <div class="my-auto">Discover</div>
    </div>
  </div>
  <div class="w-full h-12">
    <div
      class="flex align-center h-full pl-4 gap-4 rounded-md hover:bg-gray-800 hover:cursor-pointer mx-2"
      :class="{}"
    >
      <img src="../assets/icons/library.svg" height="32" width="32" />

      <div class="my-auto">Library</div>
    </div>
  </div>
</template>
