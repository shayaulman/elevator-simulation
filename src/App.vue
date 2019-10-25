<template>
  <div id="app">
    <div class="sidebar">
      <span>Floors</span>
      <button @click="addFloor()">+</button>
      <button @click="removeFloor()">-</button>
      <span>Elevators</span>
      <button @click="addElevator()">+</button>
      <button @click="removeElevator()">-</button>
      <span>Floor</span>
      <span>Height</span>
      <input @input="updateFloorHeight($event.target.value)" value="40" type="number" />
    </div>

    <div class="container">
      <Elevator
        v-for="(elevator,i) in elevatorSystem.numOfElevators"
        :key="i"
        class="con"
        :buildingHeight="height * elevatorSystem.numOfFloors"
        :floorHeight="height"
        :floor="height * elevatorSystem.elevators[i].onFloor"
        :control="elevatorSystem.elevators[i].onFloor"
        ref="elev"
      />

      <!-- <div class="controls">
      <button @click="test()">test</button>
      <div class="buttons"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
// import House from "./components/House";
import Elevator from "./components/Elevator";
import ElevatorSystem from "./elevator";

export default {
  data() {
    return {
      elevatorSystem: new ElevatorSystem(12, 5),
      height: "",
      floor: ""
    };
  },
  components: {
    // House,
    Elevator
  },

  methods: {
    getHeight() {
      return (
        // need to fix this bad approach
        this.$children[0].$el.childNodes[1].clientHeight /
        this.elevatorSystem.numOfFloors
        // this.elevatorSystem.numOfFloors * 40
      );
    },
    addFloor() {
      this.elevatorSystem.numOfFloors++;
    },
    removeFloor() {
      this.elevatorSystem.numOfFloors--;
    },
    addElevator() {
      this.elevatorSystem.numOfElevators++;
      console.log(this.elevatorSystem.numOfElevators);
    },
    removeElevator() {
      this.elevatorSystem.numOfElevators--;
    },
    updateFloorHeight(updatedHeight) {
      this.height = updatedHeight;
    }
  },

  mounted() {
    this.height = 40; //this.getHeight();
    console.log(this.elevatorSystem.numOfElevators);
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 25vh;
  height: 50vh;
  background-color: var(--color-3);
  border-radius: 0 6px 6px 0;

  button {
    margin: 3px 6px;
    padding: 12px 18px;
    font-size: 24px;
    color: var(--color-2);
    background-color: var(--color-1);
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  input {
    width: 44px;
  }
}
</style>

<style>
html {
  height: 100vh;
}
body {
  margin: 0;
  background-color: var(--color-1);
}
</style>
