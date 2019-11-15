<template>
  <div class="info" :style="{direction: lang === 'en' ? 'ltr' : 'rtl'}">
    <span v-if="elevatorSystem.elevators.some(elevator => elevator.target === index)">
      {{lang === 'en' ? 'elevator' : 'מעלית'}}
      <span class="number">{{arriving(index).num}}</span>
      {{lang === 'en' ? 'will arrive in ' : 'מגיע בעוד'}}
      <span
        class="number"
      >{{arriving(index).seconds > 1 ? arriving(index).seconds : ''}}</span>
      {{lang === 'en' ? arriving(index).seconds > 1 ? 'seconds' : 'a second' : arriving(index).seconds > 1 ? 'שניות' : 'שניה'}}
    </span>

    <span
      v-else-if="elevatorSystem.queue.includes(index)"
    >{{lang === 'en' ? 'In queue...' : 'בתור...'}}</span>

    <span v-else-if="elevatorSystem.elevators.some(elevator => elevator.onFloor === index)">
      {{lang === 'en' ? 'elevator' : 'מעלית'}}
      <span class="number">{{elevatorOnFloor(index)}}</span>
      {{lang === 'en' ? 'is ready' : 'מוכנה!'}}
    </span>

    <span
      v-else-if="freeElevators === 0"
    >{{lang === 'en' ? 'All elevators are engaged :(' : 'כל המעליות תפוסות :('}}</span>
    <span v-else>
      <span class="number">{{freeElevators}}</span>
      {{lang === 'en' ? 'elevator' : freeElevators > 1 ? 'מעליות' : 'מעלית'}}
      {{lang === 'en' ? freeElevators > 1 ? 's are' : ' is' : ''}}
      {{lang === 'en' ? 'free' : freeElevators > 1 ? 'פנויות' : 'פנויה'}}
    </span>
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem,
      num: 2
    };
  },

  computed: {
    freeElevators: function() {
      return this.elevatorSystem.elevators.filter(
        elevator => elevator.state === "free"
      ).length;
    },
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    arriving(floor) {
      const elevatorOnWay = this.elevatorSystem.elevators.filter(
        e => e.target === floor
      );
      const seconds = Math.abs(elevatorOnWay[0].onFloor - floor).toFixed();
      return { num: elevatorOnWay[0].num + 1, seconds: seconds };
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
  margin-left: 50px;
  width: 220px;
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

  .number {
    color: var(--color-3-op);
  }

  span {
    transition: info 0.5s step-end infinite alternate;
  }
}

@keyframes info {
  0% {
    margin-left: -25px;
    opacity: 1;
  }
  90% {
    margin-left: 0;
    opacity: 0.5;
  }
}
</style>