import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";

var config = {
  apiKey: "AIzaSyCJBUGyljws_Wv7imEGoXMfok-Ul6zprt0",
  authDomain: "push-notify-a245f.firebaseapp.com",
  projectId: "push-notify-a245f",
  storageBucket: "push-notify-a245f.appspot.com",
  messagingSenderId: "295741817447",
  appId: "1:295741817447:web:cfd67f3102d960998acac2",
  measurementId: "${config.measurementId}",
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BKIjp3rmX3KeAgI6H1QVs6reOZFTDgS0Ww5_mg8akLdAYF0Qhugmzv-j2EGJRIeE99UzvMgTO78cMv9wmKbBjHo"
); // 1. Generate a new key pair

// Request Permission of Notifications
messaging
  .requestPermission()
  .then(() => {
    console.log("Notification permission granted.");

    // Get Token
    messaging.getToken().then((token) => {
      console.log(token);
    });
  })
  .catch((err) => {
    console.log("Unable to get permission to notify.", err);
  });

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
