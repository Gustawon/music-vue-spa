<script lang="ts">
import MenuItem from "./MenuItem.vue";
import type IMenuItem from "../interfaces/IMenuItem";

export default {
  name: "MenuList",
  data() {
    return {
      menu: [
        {
          name: "Home",
          key: "home-menu",
          route: "/",
          icon: "/src/assets/icons/home.svg",
          iconFilled: "/src/assets/icons/home_filled.svg",
        } as IMenuItem,
        {
          name: "Discover",
          key: "discover-menu",
          route: "/discover",
          icon: "/src/assets/icons/explore.svg",
          iconFilled: "/src/assets/icons/explore_filled.svg",
        } as IMenuItem,
        {
          name: "Library",
          key: "library-menu",
          route: "/library",
          icon: "/src/assets/icons/library.svg",
          iconFilled: "/src/assets/icons/library_filled.svg",
        } as IMenuItem,
        {
          name: "Manage",
          key: "manage-menu",
          route: "/manage",
          icon: "/src/assets/icons/upload.svg",
          iconFilled: "/src/assets/icons/upload_filled.svg",
        } as IMenuItem,
        {
          name: "About",
          key: "about-menu",
          route: "/about",
          icon: "/src/assets/icons/info.svg",
          iconFilled: "/src/assets/icons/info_filled.svg",
        } as IMenuItem,
      ],

      // TODO - make this interactive
      selectedMenuItem: "home-menu",
    };
  },

  components: {
    MenuItem,
  },
};
</script>

<template>
  <ul class="list-none w-full h-full">
    <MenuItem
      v-for="item in menu"
      :key="item.key"
      :menuItem="item"
      :selected="item.key === selectedMenuItem"
    />
  </ul>
</template>
