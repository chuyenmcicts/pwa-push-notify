import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

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

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BKIjp3rmX3KeAgI6H1QVs6reOZFTDgS0Ww5_mg8akLdAYF0Qhugmzv-j2EGJRIeE99UzvMgTO78cMv9wmKbBjHo",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      localStorage.setItem("tokenDevice", currentToken);
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
