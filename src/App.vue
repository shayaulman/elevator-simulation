<template>
  <div id="app">
    <Clouds />
    <Panel />
    <GithubLink />
    <House />
  </div>
</template>

<script>
import House from "./components/House";
import Panel from "./components/Panel";
import Clouds from "./components/Clouds";
import GithubLink from "./components/GithubLink";

export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem,
      houseWidth: ""
    };
  },
  components: {
    Panel,
    Clouds,
    GithubLink,
    House
  }
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100%;

  margin: 0;
  background-color: var(--color-1);
}
</style>
