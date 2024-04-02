import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
    showModal: false,
  }),
  actions: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
