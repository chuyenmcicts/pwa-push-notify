<template>
  <div id="app">
    <v-app>
      <v-banner
        v-if="deferredPrompt"
        color="info"
        dark
        class="text-left"
      >
        Cài đặt ứng dụng
        
        <template v-slot:actions>
          <v-btn text @click="dismiss">Từ chối</v-btn>
          <v-btn text @click="install">Cài đặt</v-btn>
        </template>
      </v-banner>
<div class="pa-4 text-center">
        <img alt="Vue logo" src="./assets/logo.png" />
        <h1>Demo PWA Push Notify</h1>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      deferredPrompt: null
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    }
  }
};
</script>
