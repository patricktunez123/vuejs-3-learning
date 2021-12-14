let app = Vue.createApp({
  data() {
    return {
      greeting: "Hello again",
      isVisible: false,
    };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
  },
});
app.mount("#app");
