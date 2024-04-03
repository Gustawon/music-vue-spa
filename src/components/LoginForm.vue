<script lang="ts">
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";
import type IUserLoginData from "@/interfaces/IUserLoginData";

export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required|min:6|max:100",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait! Login in progeress.",
    };
  },
  methods: {
    ...mapActions(useAuthStore, {
      loginUser: "login",
    }),
    async login(values: IUserLoginData) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = "bg-gray-500";
      this.login_alert_msg = "Please wait! Login in progress.";

      try {
        await this.loginUser(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = "bg-red-500";
        this.login_alert_msg = "Invalid user data.";
        return;
      }

      this.login_alert_variant = "bg-green-500";
      this.login_alert_msg = "Success! You are logged-in now.";

      window.location.reload();
    },
  },
};
</script>

<template>
  <!-- Login Form -->
  <div
    class="w-full text-white text-center font-bold p-4 mt-10 rounded mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <VeeForm
    class="w-full mt-10"
    :validation-schema="loginSchema"
    @submit="login"
  >
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-pink-600" name="email" />
    </div>

    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-pink-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full mt-10 bg-gray-950 text-white py-1.5 px-3 rounded transition hover:bg-slate-800"
    >
      Login
    </button>
  </VeeForm>
</template>
