<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";
import useConfigStore from "../stores/config";
import handleServerError from "../fns/handleServerError";

const username = ref<string>();
const password = ref<string>();

async function sendCredentials() {
  const { baseUrl } = storeToRefs(useConfigStore());
  const data = {
    username: username.value,
    password: password.value,
  };

  axios
    .post(baseUrl.value + "/users/create", data)
    .then((res) => console.log(res.data))
    .catch(handleServerError);
}
</script>

<template>
  <div>Register Page</div>

  <label for="input-register-username">
    Username
    <input type="text" placeholder="skinny" id="input-register-username" v-model="username" />
  </label>
  <label for="input-register-password">
    Password
    <input type="text" placeholder="fads" id="input-register-password" v-model="password" />
  </label>
  <button className="bg-blue-300" @click="sendCredentials">Register</button>
</template>
