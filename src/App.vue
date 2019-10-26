<template>
  <div id="app">
    <Sidebar />
    <div class="container">
      <Elevator
        v-for="(elevator,i) in elevatorSystem.elevators"
        :key="i"
        class="con"
        :buildingHeight="elevatorSystem.floorHeight * elevatorSystem.numOfFloors"
        :floorHeight="elevatorSystem.floorHeight"
        :floor="elevatorSystem.floorHeight * elevator.onFloor"
        :control="elevator.onFloor"
        ref="elev"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Elevator from "./components/Elevator";

export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },
  components: {
    Sidebar,
    Elevator
  }
};
</script>

<style lang="scss" scoped>
#app {
  // height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.container {
  display: flex;
  justify-content: center;
}
</style>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100%;

  margin: 0;
  background-color: var(--color-1);
}

html {
  height: 100%;
}
</style>
