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
            class="floor-input"
            type="number"
            @focus="elevatorSystem.holdDoors(index)"
            @click="elevatorSystem.closeDoorsAndGo(index, $event.target.value)"
            min="0"
            :max="elevatorSystem.numOfFloors"
          />
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
  methods: {}
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
    // width: 40%;
    margin: 12px 10%;
    // height: 38px;
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
    color: var(--color-1);
    border-radius: 50%;
    background-color: var(--color-3);
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

.floor-input {
  padding: 8px;
  position: absolute;
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

.open-doors {
  width: 4%;
  transition: all 1s ease-in;
}
.free,
.open {
  border: 0.8px solid transparent;
}

.goingUp,
.goingDown {
  animation: blink-traveling 0.5s step-end infinite alternate;
}

.arrived {
  border: 0.8px solid green;
}
</style>



