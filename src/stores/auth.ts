import { defineStore } from "pinia";
import type IUserLoginData from "@/interfaces/IUserLoginData";

import {
  auth,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from "../includes/firebase";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
    showModal: false,
  }),
  actions: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    async login(values: IUserLoginData) {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      this.userLoggedIn = true;
    },

    async signOut() {
      await signOutFirebase(auth);
      this.userLoggedIn = false;
    },
  },
});
