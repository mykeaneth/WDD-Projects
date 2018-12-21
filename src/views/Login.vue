<template>
  <div class="login">
    <h1>This is an about page</h1>
    <button @click="login()">Login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("user", {
      login: "login",
    })
  }
};
