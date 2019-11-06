export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 40;
    this.elevators = this.initElevators();
  }

  initElevators() {
    let elevators = [];
    for (let i = 0; i < this.numOfElevators; i++) {
      elevators[i] = {
        num: i,
        onFloor: Math.floor(Math.random() * this.numOfFloors),
        target: "",
        state: "free" // 'goingUp', 'goingDown', 'open',
      };
    }
    return elevators;
  }

  callElevator(toFloor) {
    // this.elevators.forEach(e => console.log(e.state));
    if (
      this.elevators.filter(elevator => elevator.state === "free").length === 0
    ) {
      console.log("no available elvators...");
      return false;
    }

    if (this.elevators.some(elevator => elevator.target === toFloor)) {
      return false;
    }

    const freeElevators = this.elevators.filter(
      elevator => elevator.state === "free"
    );
    const alreadyOnFloor = this.elevators.filter(
      elevator => elevator.onFloor === toFloor
    );

    const bestChoise =
      alreadyOnFloor.length !== 0
        ? alreadyOnFloor[0]
        : freeElevators.sort((a, b) => {
            // prefer to bring down an elevator rather than up
            if (
              Math.abs(a.onFloor - toFloor) === Math.abs(b.onFloor - toFloor)
            ) {
              return b.onFloor - a.onFloor;
            }

            return (
              Math.abs(a.onFloor - toFloor) - Math.abs(b.onFloor - toFloor)
            );
          })[0];

    bestChoise.target = toFloor;
    this.goToFloor(bestChoise, bestChoise.onFloor, toFloor);
  }

  goToFloor(elevator, fromFloor, toFloor) {
    elevator.target = toFloor;
    if (toFloor > this.numOfFloors - 1 || toFloor < 0) {
      alert(`There's only ${this.numOfFloors - 1} floors in this building...`);
      this.holdDoors(elevator.num);
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
      // setTimeout(() => this.updateElevatorState(elevator), 5000);
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

      // bad approach fix
      if (
        elevator.onFloor.toFixed(6) === 0 ||
        elevator.onFloor.toFixed(6) === this.numOfFloors
      ) {
        clearInterval(move);
      }

      if (+elevator.onFloor.toFixed(6) === toFloor) {
        elevator.onFloor = +elevator.onFloor.toFixed();
        clearInterval(move);
        elevator.state = "arrived";
        elevator.target = "";
        setTimeout(() => (elevator.state = "open"), 500);
        setTimeout(() => (elevator.state = "free"), 6000);
      }
    }, 100);
  }

  updateElevatorState(elevator) {
    if (elevator.state !== "waiting") elevator.state = "free";
  }

  holdDoors(i, value) {
    console.log(value);
    this.elevators[i].state = "waiting";
  }

  closeDoorsAndGo(i, toFloor) {
    // if ordered elevator and did'n use
    setTimeout(() => {
      this.closeDoors(i);
    }, 10000);
    if (toFloor === "") return;
    this.elevators[i].state = "free";
    setTimeout(() => {
      this.goToFloor(this.elevators[i], this.elevators[i].onFloor, +toFloor);
    }, 800);
  }

  closeDoors(i) {
    if (this.elevators[i].state === "waiting") {
      this.elevators[i].state = "free";
    }
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
