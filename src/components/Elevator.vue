<template>
  <div class="container">
    <p class="elevator-number">{{ index + 1 }}</p>
    <div class="control" :class="state">
      <strong>{{ control.toFixed() }}</strong>
    </div>
    <div class="elevator-con" ref="con" :style="shaftStyle">
      <div class="elevator" :style="elevatorHeight">
        <div class="room" :style="roomHeight">
          <input
            placeholder="..."
            class="floor-input"
            type="number"
            @focus="elevatorSystem.holdDoors(index)"
            @input="elevatorSystem.holdDoors(index, $event.target.value)"
            min="0"
            :max="elevatorSystem.numOfFloors-1"
          />
          <div class="control-buttons">
            <button class="increment" @click="increment()">&#9650;</button>
            <button class="go-button" @click="goTo(index)">Go</button>
            <button @click="decrement()" class="decrement">&#9660;</button>
          </div>

          <div
            class="left-door"
            :class="[state === 'open' || state === 'waiting' ? 'open-doors' : '']"
          ></div>
          <div
            class="right-door"
            :class="[state === 'open' || state === 'waiting' ? 'open-doors' : '']"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    buildingHeight: Number,
    floorHeight: Number,
    floor: Number,
    state: String,
    control: Number
  },

  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },
  computed: {
    shaftStyle() {
      return {
        height: `${this.buildingHeight}px`,
        background: `repeating-linear-gradient(
          to bottom,
          var(--color-2),
          var(--color-2) ${this.elevatorSystem.floorHeight}px,
          var(--color-2-op) ${this.elevatorSystem.floorHeight}px,
          var(--color-2-op) ${this.elevatorSystem.floorHeight * 2}px
        )`
      };
    },
    elevatorHeight() {
      return {
        height: `${this.buildingHeight}px`
      };
    },
    roomHeight() {
      return {
        height: `${this.elevatorSystem.floorHeight}px`,
        bottom: `${this.floor}px`
      };
    }
  },
  methods: {
    increment() {
      this.$el.querySelector(".floor-input").stepUp();
    },
    decrement() {
      this.$el.querySelector(".floor-input").stepDown();
    },

    goTo(i) {
      this.elevatorSystem.closeDoorsAndGo(
        i,
        this.$el.querySelector(".floor-input").value
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 1px;

  .control {
    margin: 12px 10%;
    background-color: var(--color-1);
    padding: 6px 20px;
    border-radius: 3px;
    text-align: center;
    color: var(--color-3);
    font-size: 14px;
  }

  .elevator-number {
    margin: 0 auto;
    margin: 0;
    padding: 8px 14px;
    font-size: 12px;
    width: fit-content;
    text-align: center;
    color: var(--color-5);
    border-radius: 50%;
    background-color: var(--color-3-op);
  }
}

.elevator-con {
  position: relative;
  min-width: 120px;
  background-color: var(--color-2);
}

.elevator {
  position: absolute;
  margin: 0 35%;
  width: 35%;
  background-color: var(--color-3);
}

.room {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.1s ease-in;
  z-index: 1;

  .control-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 0;
    height: 100%;
    overflow: hidden;

    .go-button {
      color: var(--color-3);
      font-size: 10px;

      &:hover {
        color: var(--color-2);
        transition: 0.2s ease-in-out;
      }
    }

    button {
      padding: 1px;
      font-size: 9px;
      text-align: center;
      background-color: var(--color-1);
      color: var(--color-2);
      border: none;
      cursor: pointer;
    }

    .increment,
    .decrement {
      opacity: 0.8;

      &:hover {
        color: var(--color-3);
        transition: 0.2s ease-in-out;
      }
    }
  }

  .floor-input {
    position: absolute;
    padding: 6px 6px;
    width: 100%;
    height: 100%;
    background-color: var(--color-2-op);
    border: none;
    border-radius: 3px;
    transition: all 0.5s ease-in;

    &:focus {
      outline: none;
    }
  }
}

.right-door,
.left-door {
  width: 49%;
  height: 100%;
  background-color: var(--color-1);
  bottom: 0;
  z-index: 1;
  transition: all 1s ease-in;
}

.open-doors {
  width: 4%;
  transition: all 1s ease-in;
}
.free,
.open,
.waiting {
  border: 0.8px solid transparent;
}

.goingUp,
.goingDown {
  animation: blink-traveling 0.5s step-end infinite alternate;
}

.arrived {
  border: 0.8px solid green;
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>



