<script lang="ts">
import { mapState, mapActions } from "pinia";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

import { useAuthStore } from "@/stores/auth";

export default {
  name: "AuthorizationModal",
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState(useAuthStore, {
      showModal: "showModal",
    }),
  },
  methods: {
    ...mapActions(useAuthStore, {
      toggleModal: "toggleModal",
    }),
  },
  components: {
    LoginForm,
    RegisterForm,
  },
};
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-md flex flex-col items-center justify-center"
    :class="{ invisible: !showModal }"
  >
    <div
      class="flex flex-col bg-gray-700 items-center justify-center rounded-lg text-left overflow-hidden p-6 min-w-96"
    >
      <!-- Tittle -->
      <div class="flex items-center justify-between w-full">
        <p class="text-2xl">Music Account</p>
        <button @click="toggleModal">
          <img src="/src/assets/icons/close.svg" height="32" width="32" />
        </button>
      </div>

      <!-- Tabs -->
      <ul class="flex mb-4 mt-4 w-full gap-6">
        <li
          class="h-12 w-6/12 flex border items-center justify-center hover:cursor-pointer"
          :class="{ 'bg-gray-200 text-gray-950': tab === 'login' }"
          @click="tab = 'login'"
        >
          Login
        </li>
        <li
          class="w-6/12 flex border items-center justify-center hover:cursor-pointer"
          :class="{ 'bg-gray-200 text-gray-950': tab === 'register' }"
          @click="tab = 'register'"
        >
          Register
        </li>
      </ul>

      <LoginForm v-if="tab === 'login'" />
      <RegisterForm v-else />
    </div>
  </div>
</template>
