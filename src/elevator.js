export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 35;
    this.elevators = this.initElevators();
  }

  initElevators() {
    let elevators = [];
    for (let i = 0; i < this.numOfElevators; i++) {
      elevators[i] = {
        num: i,
        onFloor: Math.floor(Math.random() * this.numOfFloors),
        target: "",
        state: "free" // 'goingUp', 'goingDown', 'open', 'closing',
      };
    }
    return elevators;
  }

  callElevator(toFloor) {
    if (
      this.elevators.some(
        elevator =>
          elevator.target === toFloor &&
          elevator.state !== "goingDown" &&
          elevator.state !== "goingUp"
      )
    ) {
      return false;
    }

    const freeElevators = this.elevators.filter(
      elevator => elevator.state === "free"
    );

    const closest = freeElevators.sort((a, b) => {
      // prefer to bring down an elevator rather than up
      if (Math.abs(a.onFloor - toFloor) === Math.abs(b.onFloor - toFloor)) {
        return b.onFloor - a.onFloor;
      }

      return Math.abs(a.onFloor - toFloor) - Math.abs(b.onFloor - toFloor);
    })[0];
    closest.target = toFloor;
    this.goToFloor(closest, closest.onFloor, toFloor);
  }

  goToFloor(elevator, fromFloor, toFloor) {
    if (toFloor > this.numOfFloors - 1 || toFloor < 0) {
      alert("Please enter a valid option");
      return false;
    }
    if (fromFloor > toFloor) {
      elevator.state = "goingDown";
    } else if (fromFloor < toFloor) {
      elevator.state = "goingUp";
    } else {
      elevator.target = "";
      elevator.state = "arrived";
      setTimeout(() => (elevator.state = "open"), 500);
    }

    if (elevator.onFloor === toFloor) {
      setTimeout(() => this.updateElevatorState(elevator), 5000);
      return;
    }

    //wait 1/2 second to indicate call of elevator
    const move = setInterval(() => {
      elevator;
      if (elevator.state === "goingUp") {
        elevator.onFloor += 0.1;
      } else {
        elevator.onFloor -= 0.1;
      }

      if (+elevator.onFloor.toFixed(6) === toFloor) {
        elevator.onFloor = +elevator.onFloor.toFixed();
        clearInterval(move);
        elevator.state = "arrived";
        setTimeout(() => (elevator.state = "open"), 500);
        setTimeout(() => (elevator.state = "free"), 3000);
      }
    }, 100);
  }

  updateElevatorState(elevator) {
    if (elevator.state !== "waiting") elevator.state = "free";
  }

  holdDoors(i) {
    this.elevators[i].state = "waiting";
  }

  closeDoorsAndGo(i, toFloor) {
    this.elevators[i].state = "free";
    setTimeout(() => {
      this.goToFloor(this.elevators[i], this.elevators[i].onFloor, +toFloor);
    }, 800);
  }

  /*  UI state handlers  */

  addElevator() {
    this.elevators.push({
      num: this.elevators.length,
      onFloor: Math.floor(Math.random() * this.numOfFloors),
      target: "",
      state: "free"
    });
  }

  removeElevator() {
    this.elevators.pop();
  }

  addFloor() {
    this.numOfFloors++;
  }

  removeFloor() {
    this.numOfFloors--;
  }

  updateFloorHeight(updatedHeight) {
    this.floorHeight = updatedHeight;
  }
}
