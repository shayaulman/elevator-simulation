<template>
  <div class="buttons-container">
    <div
      class="buttons"
      v-for="(elevator,i) in elevatorSystem.numOfFloors"
      :key="i"
      :style="{height:`${elevatorSystem.floorHeight}px`}"
    >
      <button class="call-button" @click="elevatorSystem.callElevator(i)">
        <span>&#9650;</span>
        <span>&#9660;</span>
      </button>
      <div class="info">
        <span class="info-1">{{freeElevators}}</span>
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

.call-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 3px;
  // height: 70%;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    display: flex;
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

    span {
      margin: 0;
    }
  }
}

.info {
  margin: 1px 0 1px 12px;
  font-size: 12px;
  padding: 6px;
  background-color: var(--color-1);
  border-radius: 3px;
  color: var(--color-6);

  .info-1 {
    color: var(--color-3-op);
  }
}
.open {
  animation: blink-traveling 0.5s step-end infinite alternate;
}
</style>