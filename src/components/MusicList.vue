<script lang="ts">
import MusicListItem from "./MusicListItem.vue";

export default {
  name: "MusicList",
  data() {
    return {};
  },

  components: {
    MusicListItem,
  },
};
</script>

<template>
  <ul class="list-none w-full h-full">
    <MusicListItem />
    <MusicListItem />
    <MusicListItem />
    <MusicListItem />
  </ul>
</template>
