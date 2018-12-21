<template>
  <header class>
    <h1>Web Design Davao Projects</h1>
    <div v-if="loggedIn">
        <img :src="profile.picture">
        <button @click="logout">Logout</button>
    </div>
    <button v-else @click="login">Login</button>
  </header>
</template>
