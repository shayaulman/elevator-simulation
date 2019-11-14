<template>
  <div class="panel">
    <p class="floor-info">{{elevatorSystem.numOfFloors-1}}</p>
    <span>{{ lang === 'en' ? 'Floors' : 'קומות'}}</span>
    <div class="btn-container">
      <button
        :disabled="elevatorSystem.elevators.some(elevator => elevator.target !== '')"
        @click="elevatorSystem.addFloor()"
      >+</button>
      <button
        :disabled="elevatorSystem.elevators.some(elevator => elevator.target !== '')"
        @click="elevatorSystem.removeFloor()"
      >-</button>
    </div>
    <span>{{lang === 'en' ? 'Elevators' : 'מעליות'}}</span>
    <div class="btn-container">
      <button
        :disabled="elevatorSystem.elevators.some(elevator => elevator.target !== '')"
        @click="elevatorSystem.addElevator()"
      >+</button>
      <button
        :disabled="elevatorSystem.elevators.some(elevator => elevator.target !== '')"
        @click="elevatorSystem.removeElevator()"
      >-</button>
    </div>

    <div class="lang-toggle">
      <label class="switch">
        <input type="checkbox" @click="toggleLang()" />
        <span class="slider round" />
      </label>
      <div class="lang-label">
        <span>🇮🇱</span>
        <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },

  methods: {
    toggleLang() {
      this.$store.commit(
        "toggleLang",
        this.$store.state.lang === "en" ? "he" : "en"
      );
      console.log(this.$store.state.lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  padding: 5px;
  left: -0;
  bottom: 50px;
  background-color: var(--color-3);
  border-radius: 0 6px 6px 0;
  z-index: 3;

  .floor-info {
    color: var(--color-2);
    text-align: center;
    background-color: var(--color-1);
    border-radius: 3px;
    margin: 1px;
    padding: 4px;
    font-size: 16px;
  }
  .btn-container {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 1px;
    padding: 6px 9px;
    font-size: 16px;
    color: var(--color-2);
    background-color: var(--color-1);
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
      background-color: var(--color-1-light);
      cursor: not-allowed;
    }

    &:hover {
      background-color: var(--color-1-light);
      transition: 0.5s ease-in-out;
    }

    &:focus {
      outline: none;
    }
  }
  span {
    text-align: center;
    font-size: 12px;
  }
  input {
    margin: auto;

    width: 40px;
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
.lang-toggle {
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .lang-label {
    display: flex;
    margin: 4px;

    span {
      margin: 0 4px;
      font-size: 18px;
    }
  }
}

/* source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch */
/* The switch - the box around the slider */
.switch {
  margin: auto;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
} /*HidedefaultHTMLcheckbox*/
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
} /*Theslider*/
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-1);
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 3px;
  background-color: var(--color-2);
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
input:checked {
  background-color: var(--color-2);
}
// input:focus + .slider {
//   box-shadow: 001pxlightgreen;
// }
input:checked + .slider:before {
  -webkit-transform: translateX(12px);
  -ms-transform: translateX(12px);
  transform: translateX(12px);
} /*Roundedsliders*/
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>