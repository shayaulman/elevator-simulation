<template>
  <div class="info">
    <span
      v-if="elevatorSystem.elevators.some(elevator => elevator.target === index)"
    >elevator {{arriving(index)}} is on the way...</span>
    <span v-else-if="elevatorSystem.queue.includes(index)">In queue...</span>

    <span
      v-else-if="elevatorSystem.elevators.some(elevator => elevator.onFloor === index)"
    >elevator {{elevatorOnFloor(index)}} is ready</span>

    <span v-else-if="freeElevators == 0">All elevators are engaged 😥</span>
    <span v-else>{{freeElevators}} elevator{{freeElevators > 1 ? 's are' : ' is'}} free!</span>
    <!-- <span>{{message(index)}}</span> -->
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem,
      // infoMessage: "",
      num: 2
    };
  },

  mounted() {
    // this.infoMessage = this.message();
  },

  computed: {
    freeElevators: function() {
      return this.elevatorSystem.elevators.filter(
        elevator => elevator.state === "free"
      ).length;
    }
  },
  methods: {
    arriving(floor) {
      const elevatorOnWay = this.elevatorSystem.elevators.filter(
        e => e.target === floor
      );
      return elevatorOnWay[0].num + 1;
    },
    elevatorOnFloor(floor) {
      const elevatorOnFloor = this.elevatorSystem.elevators.filter(
        e => e.onFloor === floor
      );
      return elevatorOnFloor[0].num + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  width: 250px;
  text-align: center;
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
</style>