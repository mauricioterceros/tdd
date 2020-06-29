<template>
  <div id="app">
    <input id="input-to-edit" />
    <button id="btn-show-hi" @click="onAddAgenda">SAY HI</button>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div></div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  methods: {
    ...mapActions(["addAgenda"]),

    onAddAgenda() {
      this.addAgenda({
        agendaId: "ANG-0001",
        name: "Work",
        description: "My Agenda to manage my workd",
        startHour: "10:00",
        endHour: "16:00",
        appointments: []
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
