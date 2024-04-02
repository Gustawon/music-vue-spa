<script lang="ts">
import { type PropType, defineComponent } from "vue";
import type IMenuItem from "../interfaces/IMenuItem.ts";
import { RouterLink } from "vue-router";

// defineProps<{ name: string; icon: string; isSelected: boolean }>();
export default defineComponent({
  name: "MenuItem",
  props: {
    menuItem: {
      type: Object as PropType<IMenuItem>,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <div class="w-full h-12 mb-4">
    <RouterLink
      :to="menuItem.route"
      class="flex align-center h-full pl-4 gap-4 rounded-md hover:bg-gray-800 hover:cursor-pointer mx-2"
      :class="{ 'bg-gray-800': selected }"
    >
      <img
        :src="selected ? menuItem.iconFilled : menuItem.icon"
        height="32"
        width="32"
      />

      <div class="my-auto">{{ menuItem && menuItem.name }}</div>
    </RouterLink>
  </div>
</template>
