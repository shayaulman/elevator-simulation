<template>
  <div class="buttons-container">
    <div
      class="buttons"
      v-for="(elevator,i) in elevatorSystem.numOfFloors"
      :key="i"
      :style="{height:`${elevatorSystem.floorHeight}px`}"
    >
      <button
        class="call-button"
        :class="[{open : elevatorSystem.elevators.some(elevator => elevator.onFloor === i && elevator.state === 'open' || elevator.onFloor === i && elevator.state === 'waiting')},
         {inQueue : elevatorSystem.queue.includes(i)},elevatorSystem.elevators.some(elevator => elevator.target === i) ? 'coming' : '']"
        @click="elevatorSystem.callElevator(i)"
      >
        <span>&#9650;</span>
        <span>&#9660;</span>
      </button>
      <Screen :index="i" />
    </div>

    <div class="smart-info">
      <font-awesome-icon
        class="fas"
        icon="info-circle"
        :class="{infoProccesing : elevatorSystem.elevators.some(elevator => elevator.state !== 'free')}"
      />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Screen from "./Screen";
library.add(faInfoCircle);
export default {
  props: ["state"],
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },
  components: {
    Screen,
    FontAwesomeIcon
  }
};
</script>
<style lang="scss" scoped>
.buttons-container {
  position: relative;
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
    transition: all 0.1s ease-in-out;

    &:hover {
      color: var(--color-2);
      border: 1px solid var(--color-2);
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
.open {
  border: 1px solid green !important;
}

.coming {
  animation: blink-traveling 0.5s step-end infinite alternate;
}

.inQueue {
  border: 1px solid red !important;
}

.smart-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-left: 40px;
  border-radius: 10px;
  width: 200px;
  font-size: 10px;

  .circle-text {
    display: flex;

    span {
      height: 200px;
      position: absolute;
      width: 20px;
      left: 0;
      top: 0;
      transform-origin: bottom center;
    }
  }

  .fas {
    font-size: 50px;
    color: var(--color-2);
    padding: 10px;
  }

  .infoProccesing {
    font-size: 50px;
    animation: info-proccesing 1.2s ease-in-out infinite;
  }
}

@keyframes info-proccesing {
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1.15);
  }
}
</style>