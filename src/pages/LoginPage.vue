<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import axios from "axios";
import useConfigStore from "../stores/config";
import useAuthStore from "../stores/auth";
import handleServerError from "../fns/handleServerError";

const username = ref<string>();
const password = ref<string>();
const router = useRouter();

async function sendCredentials() {
  const { baseUrl } = storeToRefs(useConfigStore());
  const { isLogin } = storeToRefs(useAuthStore());
  const data = {
    username: username.value,
    password: password.value,
  };

  axios
    .post(baseUrl.value + "/users/login", data)
    .then((res) => {
      console.log(res.data);
      isLogin.value = true;
      router.push("/");
    })
    .catch(handleServerError);
}
</script>

<template>
  <div>Login Page</div>

  <label for="input-login-username">
    Username
    <input type="text" placeholder="skinny" id="input-login-username" v-model="username" />
  </label>
  <label for="input-login-password">
    Password
    <input type="text" placeholder="fads" id="input-login-password" v-model="password" />
  </label>
  <button className="bg-blue-300" @click="sendCredentials">Login</button>
  <span>Don't have account? Register <router-link to="/register">here</router-link></span>
</template>
