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
  <div class="h-full w-full flex flex-col items-center justify-center">
    <div>
      <MusicList />
    </div>
  </div>
</template>
