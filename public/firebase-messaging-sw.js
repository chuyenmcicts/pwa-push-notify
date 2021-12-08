// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// eslint-disable-next-line no-undef
firebase.initializeApp({
  messagingSenderId: "295741817447", // 4. Get Firebase Configuration
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
