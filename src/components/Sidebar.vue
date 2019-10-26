<template>
  <div class="sidebar">
    <p class="floor-info">{{elevatorSystem.numOfFloors-1}}</p>
    <span>Floors</span>
    <button @click="elevatorSystem.addFloor()">+</button>
    <button @click="elevatorSystem.removeFloor()">-</button>
    <span>Elevators</span>
    <button @click="elevatorSystem.addElevator()">+</button>
    <button @click="elevatorSystem.removeElevator()">-</button>
    <span>Floor</span>
    <span>Height</span>
    <input @input="elevatorSystem.updateFloorHeight($event.target.value)" value="40" type="number" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },
  created() {
    console.log(this.elevatorSystem);
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 10vh;
  height: 45vh;
  background-color: var(--color-3);
  border-radius: 0 6px 6px 0;
  z-index: 1;
  .floor-info {
    color: var(--color-2);
    background-color: var(--color-1);
    border-radius: 3px;
    margin: 3px 6px;
    padding: 12px 18px;
    font-size: 24px;
  }
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
      background-color: var(--color-1-light);
      transition: 0.5s ease-in-out;
    }
  }
  span {
    text-align: center;
  }
  input {
    margin: auto;

    width: 60px;
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