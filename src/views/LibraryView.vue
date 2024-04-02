<script lang="ts">
import MusicList from "../components/MusicList.vue";

export default {
  name: "LibraryView",
  data() {
    return {};
  },
  components: {
    MusicList,
  },
};
</script>

<template>
  <main class="h-full w-full">
    <MusicList />
  </main>
</template>
