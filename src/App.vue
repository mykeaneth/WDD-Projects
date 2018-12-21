<template>
  <div id="app">
    <toolbar :logout="logout" :profile="profile" :loggedIn="loggedIn" />
    <router-view/>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Toolbar from "@/components/Toolbar";

export default {
  components: {
    Toolbar
  },
  computed: {
    ...mapGetters("user", {
      profile: "profile",
      loggedIn: "loggedIn"
    })
  },
  methods: {
    ...mapActions("user", {
      logout: "logout"
    })
  }
};
</script>
