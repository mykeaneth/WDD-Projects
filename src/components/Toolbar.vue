<template functional>
  <header v-if="loggedIn">
    <h1>Web Design Davao Projects</h1>
      <img :src="props.profile.picture">
      <button @click="props.logout">Logout</button>
  </header>
</template>
