import { defineStore } from "pinia";

const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    login: false,
  }),
});

export default useAuthStore;
