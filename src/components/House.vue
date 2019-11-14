<template>
  <div class="house-container">
    <div class="roof-1"></div>
    <div class="roof-2" :style="{direction: lang === 'en' ? 'ltr' : 'rtl'}">
      {{
      lang === 'en' ? 'Call an elevator, enter a floor number & click the "GO" button, or hit "enter"!'
      : 'הזמן מעלית, הכנס מספר קומה, ולחץ על GO, או על "enter"!'
      }}
    </div>

    <div class="house" ref="house">
      <Elevator
        v-for="(elevator,i) in elevatorSystem.elevators"
        :key="i"
        :index="i"
        :buildingHeight="elevatorSystem.floorHeight * elevatorSystem.numOfFloors"
        :floorHeight="elevatorSystem.floorHeight"
        :floor="elevatorSystem.floorHeight * elevator.onFloor"
        :target="elevator.target"
        :control="elevator.onFloor"
        :state="elevator.state"
      />
      <ElevatorButtons />
    </div>
  </div>
</template>

<script>
import Elevator from "./Elevator";
import ElevatorButtons from "./ElevatorButtons";

export default {
  data() {
    return {
      elevatorSystem: this.$store.state.elevatorSystem,
      houseWidth: ""
    };
  },
  components: {
    Elevator,
    ElevatorButtons
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  }
};
</script>

 <style lang="scss" scoped>
.house-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.house {
  display: flex;
  width: fit-content;
  justify-content: center;
  background-color: var(--color-5);
  padding: 20px 28px 2px 28px;
}

.roof-1 {
  background-color: var(--color-5-dark);
  height: 14px;
  width: 95%;
}

.roof-2 {
  margin: 1px;
  background-color: var(--color-5-dark);
  height: 30px;
  width: 120%;
  text-align: center;
  color: #ff857c3d;
  font-size: 14px;
  font-weight: 100;
  padding: 4px;
}
</style>