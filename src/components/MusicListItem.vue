<script>
export default {
  name: "MusilListItem",
  data() {
    return {};
  },
};
</script>

<template>
  <li class="w-full flex items-center gap-6 py-2 px-4">
    <!-- Thumbnail -->
    <img src="../assets/icons/album.svg" height="32" width="32" />

    <!-- Song details -->
    <div class="flex flex-col min-w-44">
      <div>Song Title</div>
      <div class="text-gray-500">Artists Name</div>
    </div>

    <!-- Time -->
    <div class="text-gray-500">3:22</div>
  </li>
</template>
