<template>
  <div class="container">
    <div class="control" :class="state">
      <strong>{{ control.toFixed() }}</strong>
    </div>
    <div class="elevator-con" ref="con" :style="shaftStyle">
      <div class="elevator" :style="elevatorHeight">
        <div class="room" :style="roomHeight">
          <div class="left-door"></div>
          <div class="right-door" :class="[state === 'closing' ? 'closing' : 'opening']"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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

  .control {
    margin: 12px auto;
    height: 38px;
    background-color: var(--color-1-light);
    padding: 8px 25px;
    border-radius: 3px;
    text-align: center;
    color: var(--color-3);
    font-size: 16px;
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
}

.right-door,
.left-door {
  width: 49%;
  height: 100%;
  background-color: var(--color-1);
  bottom: 0;
  z-index: 1;
}
.goingUp,
.goingDown {
  animation: blink2 0.5s step-end infinite alternate;
  border: 1px solid transparent;
}

.arrived {
  border: 0.8px solid green;
}

@keyframes blink2 {
  50% {
    border-color: red;
  }
}
</style>



