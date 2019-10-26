<template>
  <div class="container">
    <div class="control" :class="{ engaged: engaged }">
      <strong>{{control}}</strong>
    </div>
    <div class="elevator-con" ref="con" :style="shaftStyle">
      <div class="elevator" :style="{height: buildingHeight + 'px'}">
        <div
          class="room"
          :style="{ height: elevatorSystem.floorHeight + 'px', bottom: floor + 'px' }"
        >
          <div class="left-door"></div>
          <div class="right-door"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["buildingHeight", "floorHeight", "floor", "engaged", "control"],
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
    padding: 8px 40px;
    border-radius: 3px;
    text-align: center;
    color: var(--color-3);
    font-size: 16px;
  }

  .engaged {
    border: 0.8px solid red;
  }
}

.elevator-con {
  position: relative;
  min-width: 180px;
  background-color: var(--color-2);
}

.elevator {
  position: absolute;
  margin: 0 35%;
  width: 30%;
  background-color: var(--color-3);
}

.room {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in;
}

.right-door,
.left-door {
  width: 48.8%;
  height: 100%;
  background-color: var(--color-1);
  bottom: 0;
  z-index: 1;
}
</style>



