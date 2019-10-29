<template>
  <div class="buttons-container">
    <div
      class="buttons"
      v-for="(elevator,i) in elevatorSystem.numOfFloors"
      :key="i"
      :style="{height:`${elevatorSystem.floorHeight}px`}"
    >
      <button @click="elevatorSystem.callElevator(i)">&#9650;</button>
      <button @click="elevatorSystem.callElevator(i)">&#9660;</button>
      <div class="info">
        {{freeElevators}}
        elevators to your service!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },

  computed: {
    freeElevators() {
      return this.elevatorSystem.elevators.filter(
        elevator => elevator.state === "free"
      ).length;
    }
  }
};
</script>
<style lang="scss" scoped>
.buttons-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  margin-left: 6px;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 1px;
    background-color: var(--color-1);
    border: none;
    color: var(--color-3);
    font-size: 10px;
    border: 1px solid var(--color-3-op);

    &:hover {
      color: var(--color-2);
      cursor: pointer;
    }

    &:focus {
      outline: none;
      border: 1px solid var(--color-2);
    }
  }
}
.open {
  animation: blink-traveling 0.5s step-end infinite alternate;
}
</style>