import Vue from "vue";
import App from "./App.vue";
import VueNotification from "@kugatsu/vuenotification";

Vue.config.productionTip = false;

Vue.use(VueNotification, {
  timer: 20,
  position: "topCenter",
  title: "Vue notification",
  error: {
    background: "#F56565",
    color: "white"
  },
  success: {
    background: "#38A169",
    color: "white"
  },
  warning: {
    background: "#ED8936",
    color: "white"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
