<template>
  <div id="app">
    <Panel />
    <div class="container">
      <div class="github-link">
        <a href="https://github.com/shayaulman/elevator-simulation" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-link">
            <path
              d="M11.135,1.665A9.733,9.733,0,0,0,8.06,20.632c.486.09.664-.211.664-.468,0-.231-.008-.843-.013-1.656C6,19.1,5.432,17.2,5.432,17.2a2.579,2.579,0,0,0-1.08-1.424c-.884-.6.066-.591.066-.591a2.043,2.043,0,0,1,1.491,1A2.072,2.072,0,0,0,8.741,17a2.082,2.082,0,0,1,.618-1.3c-2.161-.246-4.433-1.081-4.433-4.81a3.763,3.763,0,0,1,1-2.612,3.5,3.5,0,0,1,.1-2.575s.817-.262,2.676,1a9.239,9.239,0,0,1,4.872,0c1.858-1.259,2.674-1,2.674-1a3.491,3.491,0,0,1,.1,2.575,3.757,3.757,0,0,1,1,2.612c0,3.738-2.275,4.561-4.443,4.8a2.326,2.326,0,0,1,.66,1.8c0,1.3-.012,2.35-.012,2.67,0,.26.175.563.67.467A9.734,9.734,0,0,0,11.135,1.665Z"
              transform="translate(-1.404 -1.665)"
            />
          </svg>
        </a>
      </div>
      <Elevator
        v-for="(elevator,i) in elevatorSystem.elevators"
        :key="i"
        class="con"
        :buildingHeight="elevatorSystem.floorHeight * elevatorSystem.numOfFloors"
        :floorHeight="elevatorSystem.floorHeight"
        :floor="elevatorSystem.floorHeight * elevator.onFloor"
        :control="elevator.onFloor"
        :engaged="elevator.isEngaged"
        :stateOfDoors="elevator.doors"
      />
      <ElevatorButtons />
    </div>
  </div>
</template>

<script>
import Panel from "./components/Panel";
import Elevator from "./components/Elevator";
import ElevatorButtons from "./components/ElevatorButtons";

export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },
  components: {
    Panel,
    Elevator,
    ElevatorButtons
  }
};
</script>

<style lang="scss" scoped>
#app {
  // height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
}

.container {
  display: flex;
  justify-content: center;
}

.github-link {
  position: fixed;
  top: 5px;
  right: 5px;
  width: 50px;
  fill: rgb(118, 125, 129);
  &:hover {
    transition: all 0.5s ease-in;
    fill: var(--color-3);
  }
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
