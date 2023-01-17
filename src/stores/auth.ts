import { defineStore } from "pinia";

const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLogin: false,
  }),
});

export default useAuthStore;
