<template>
  <div id="app">
    <toolbar/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Toolbar from "@/components/Toolbar";

export default {
  name: "app",
  components: { Toolbar },
  computed: {
    ...mapGetters("user", {
      profile: "profile",
      loggedIn: "loggedIn"
    })
  },
  methods: {
    ...mapActions("user", {
      login: "login",
      logout: "logout"
    })
  }
};
</script>
