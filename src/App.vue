<template>
  <div id="app">
    <div v-for="(elevator,i) in elevatorSystem.elevators" :key="i" class="con">
      <Elevator
        :floorHeight="height + 'px'"
        :floor="height * elevator.onFloor+ 'px'"
        :control="elevator.onFloor"
        ref="elev"
      />
    </div>
    <div class="controls">
      <button @click="test(1)">test</button>
    </div>
  </div>
</template>

<script>
import Elevator from "./components/Elevator";
import ElevatorSystem from "./elevator";

export default {
  data() {
    return {
      elevatorSystem: new ElevatorSystem(10, 3),
      height: "",
      floor: ""
    };
  },
  components: {
    Elevator
  },

  methods: {
    getHeight() {
      return (
        // need to fix this bad approach
        this.$children[0].$el.childNodes[1].clientHeight /
        this.elevatorSystem.numOfFloors
      );
    },

    test() {
      this.elevatorSystem.callElevator(3);
    }
  },

  mounted() {
    this.height = this.getHeight();
    console.log(this.$children[0].$el.childNodes[1].clientHeight);
  }
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 5%;
  background-color: rgb(13, 13, 14);
}
#app {
  height: 100%;
  margin: 0 !important;
  display: flex;
  justify-content: center;
}
</style>

<style>
body {
  margin: 0;
  background-color: var(--color-1);
}
</style>
