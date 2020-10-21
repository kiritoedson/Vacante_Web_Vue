import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyCQOYpwYDRiVXYueZ6fOtx_3OrcU71QvdY",
  authDomain: "webvue-a3915.firebaseapp.com",
  databaseURL: "https://webvue-a3915.firebaseio.com",
  projectId: "webvue-a3915",
  storageBucket: "webvue-a3915.appspot.com",
  messagingSenderId: "701848913882",
  appId: "1:701848913882:web:813d8d3f5e544ac6e4e2e3",
  measurementId: "G-012N77LJY5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
/*let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});*/
