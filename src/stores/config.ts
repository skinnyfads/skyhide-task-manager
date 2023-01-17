import { defineStore } from "pinia";

const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    baseUrl: "http://localhost:8080",
  }),
});

export default useConfigStore;
