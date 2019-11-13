import Vue from "vue";
import Vuex from "vuex";
import ElevatorSystem from "../elevator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elevatorSystem: new ElevatorSystem()
  }
});
