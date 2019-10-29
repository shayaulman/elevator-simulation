<template>
  <div class="panel">
    <p class="floor-info">{{elevatorSystem.numOfFloors-1}}</p>
    <span>Floors</span>
    <button @click="elevatorSystem.addFloor()">+</button>
    <button @click="elevatorSystem.removeFloor()">-</button>
    <span>Elevators</span>
    <button @click="elevatorSystem.addElevator()">+</button>
    <button @click="elevatorSystem.removeElevator()">-</button>
    <span>Floor</span>
    <span>Height</span>
    <input
      @input="elevatorSystem.updateFloorHeight($event.target.value)"
      value="35"
      min="30"
      type="number"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  padding: 5px;
  left: 0;
  top: 5vh;
  height: 40vh;
  background-color: var(--color-3);
  border-radius: 0 6px 6px 0;
  z-index: 3;

  .floor-info {
    color: var(--color-2);
    text-align: center;
    background-color: var(--color-1);
    border-radius: 3px;
    margin: 3px 6px;
    padding: 6px 9px;
    font-size: 16px;
  }
  button {
    margin: 3px 6px;
    padding: 6px 9px;
    font-size: 16px;
    color: var(--color-2);
    background-color: var(--color-1);
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-1-light);
      transition: 0.5s ease-in-out;
    }

    &:focus {
      outline: none;
    }
  }
  span {
    text-align: center;
    font-size: 12px;
  }
  input {
    margin: auto;

    width: 40px;
    border: none;
    border-radius: 3px;
    padding: 6px;
    background-color: var(--color-1);
    color: var(--color-3);

    &:focus {
      outline: none;
    }
  }
}
</style>