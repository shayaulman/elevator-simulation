<template>
  <div class="container">
    <p class="elevator-number">{{ index + 1 }}</p>
    <div class="screen" :class="state">
      <span
        class="up-arrow"
        :class="[{traveling : state === 'goingUp'},{both : state === 'open' || state === 'waiting'}]"
      >&#9650;</span>
      <strong>{{ control.toFixed() }}</strong>
      <span
        class="down-arrow"
        :class="[{traveling : state === 'goingDown'},{both : state === 'open' || state === 'waiting'}]"
      >&#9660;</span>
    </div>
    <div class="elevator-con" ref="con" :style="shaftStyle">
      <div class="elevator" :style="elevatorHeight">
        <div
          v-for="(elevator, i) in elevatorSystem.numOfFloors"
          :key="i"
          :style="{height:`${elevatorSystem.floorHeight}px`}"
          class="floor-number"
        >{{i}}</div>
        <div class="room" :style="roomHeight">
          <input
            placeholder="..."
            class="floor-input"
            type="number"
            @focus="elevatorSystem.holdDoors(index)"
            @focusout="elevatorSystem.closeDoors(index)"
            @input="elevatorSystem.holdDoors(index, $event.target.value)"
            @keyup.enter="e => goTo(index)"
            min="0"
            :max="elevatorSystem.numOfFloors-1"
            :disabled="state == 'goingDown' || state === 'goingUp' || state === 'free'"
          />
          <div class="control-buttons">
            <button class="increment" @click="increment()">&#9650;</button>
            <button class="go-button" @click="goTo(index)">{{lang === 'en' ? 'Go' : 'סע'}}</button>
            <button @click="decrement()" class="decrement">&#9660;</button>
          </div>

          <div
            class="left-door"
            :class="[state === 'open' || state === 'waiting' ? 'open-doors' : '']"
          >
            <span>{{target}}</span>
          </div>
          <div
            class="right-door"
            :class="[state === 'open' || state === 'waiting' ? 'open-doors' : '']"
          >
            <span
              class="info-on-door"
            >{{ state !== 'free' && state !== 'open' && state !== 'arrived' && state !== 'waiting' ? target > floor / elevatorSystem.floorHeight ? '&#9650;': '&#9660;' : ''}}</span>
          </div>
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
    target: [Number, String],
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
    },
    lang() {
      return this.$store.state.lang;
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
      this.elevatorSystem.goButtonPressed = true;
      this.elevatorSystem.closeDoorsAndGo(
        i,
        this.$el.querySelector(".floor-input").value
      );
      setTimeout(
        () => (this.$el.querySelector(".floor-input").value = ""),
        1000
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Sniglet|ZCOOL+QingKe+HuangYou&display=swap");
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 1px;

  .screen {
    font-family: "ZCOOL QingKe HuangYou";
    display: flex;
    justify-content: space-between;
    margin: 12px 10%;
    background-color: var(--color-1);
    padding: 6px 10px;
    border-radius: 3px;
    text-align: center;
    color: var(--color-3);
    font-size: 14px;
    width: 80px;

    .up-arrow,
    .down-arrow {
      color: var(--color-5);
    }

    .up-arrow {
      margin-right: 10px;
    }

    .down-arrow {
      margin-left: 10px;
    }
  }

  .elevator-number {
    font-family: "Sniglet";
    margin: 0;
    padding: 6px 12px;
    font-size: 11px;
    text-align: center;
    color: black;
    border-radius: 50%;
    background-color: var(--color-2-op);
    border: 3px solid var(--color-1);
  }
}

.elevator-con {
  position: relative;
  min-width: 120px;
  background-color: var(--color-2);
}

.elevator {
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  margin: 0 35%;
  width: 35%;
  background-color: var(--color-3);
}

.floor-number {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "ZCOOL QingKe HuangYou";
  font-size: 120%;
  color: var(--color-2);
  opacity: 0.5;
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
      font-family: "Varela Round";
      color: var(--color-3);
      font-size: 10px;
      height: 100%;

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

.traveling {
  animation: blink-traveling-arrow 0.5s step-end infinite alternate;
}

.both {
  color: var(--color-3) !important;
}

.right-door,
.left-door {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  background-color: var(--color-3);
  color: var(--color-2);
  width: 48.2%;
  height: 100%;
  background-color: var(--color-1);
  bottom: 0;
  z-index: 1;
  transition: all 0.5s ease-in;

  .info-on-door {
    animation: blink-traveling-arrow 0.5s step-end infinite alternate;
  }
}

.open-doors {
  width: 4%;
  transition: all 0.65s ease-in;
}
.free,
.open,
.waiting,
.goingDown,
.goingUp {
  border: 0.8px solid transparent;
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



