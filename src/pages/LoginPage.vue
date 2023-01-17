<script setup lang="ts">
import { storeToRefs } from "pinia";
import useAuthStore from "../stores/auth";

const { login } = storeToRefs(useAuthStore());
console.log({ login });
</script>

<template>
  <div>Login Page</div>

  <label for="input-login-username">
    Username
    <input type="text" placeholder="skinny" />
  </label>
  <label for="input-login-password">
    Password
    <input type="text" placeholder="fads" />
  </label>
  <button className="bg-blue-300">Login</button>
</template>
