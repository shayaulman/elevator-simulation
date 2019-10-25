<template>
  <div class="container">
    <div class="control">{{control}}</div>
    <div class="elevator-con" ref="con" :style="shaftStyle">
      <div class="elevator" :style="{height: buildingHeight + 'px'}">
        <div class="room" :style="{ height: floorHeight + 'px', bottom: floor + 'px' }">
          <div class="left-door"></div>
          <div class="right-door"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["buildingHeight", "floorHeight", "floor", "control"],
  data() {
    return {};
  },
  computed: {
    shaftStyle() {
      return {
        height: `${this.buildingHeight}px`,
        background: `repeating-linear-gradient(
          to bottom,
          var(--color-2),
          var(--color-2) ${this.floorHeight}px,
          var(--color-2-op) ${this.floorHeight}px,
          var(--color-2-op) ${this.floorHeight * 2}px
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
    width: 30px;
    background-color: var(--color-4);
    padding: 4px 30px;
    border-radius: 3px;
    text-align: center;
    color: var(--color-2);
    font-size: 16px;
  }
}

.elevator-con {
  position: relative;
  // height: 600px;
  min-width: 180px;
  background-color: var(--color-2);
  margin: 1px;
}

.elevator {
  position: absolute;
  margin: 0 35%;
  // height: 600px;
  width: 30%;

  background-color: var(--color-3);
}

.room {
  position: absolute;
  width: 100%;
  overflow: hidden;
}

.right-door,
.left-door {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-1);
  bottom: 0;
  z-index: 1;
}

.right-door {
  right: -51.5%;
}

.left-door {
  left: -51.5%;
}
</style>



