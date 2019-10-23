<template>
  <div id="app">
    <button @click="createBuilding">Create a new building!</button>
    <div v-if="create">
      <input v-model="form['floors']" placeholder="How many floors" type="number" />
      <input v-model="form['elevators']" placeholder="how many elevators?" type="number" />
      <button @click="start">TEST</button>
    </div>
  </div>
</template>

<script>
import Elevator from "./elevator";

export default {
  data() {
    return {
      create: false,
      form: {}
    };
  },
  methods: {
    start() {
      const elevator = new Elevator(+this.form.floors, +this.form.elevators);
      elevator.callElevator(0, 10);
    },
    getData() {
      console.log(this.form);
    },

    createBuilding() {
      this.create = true;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
