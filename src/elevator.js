export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 35;
    this.msEachFloor = 1000;
    this.elevators = this.initElevators();
  }

  callElevator(toFloor) {
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
    console.log(this.elevators);

    this.goToFloor(closest, closest.onFloor, toFloor);
  }

  goToFloor(elevator, fromFloor, toFloor) {
    if (fromFloor > toFloor) {
      elevator.state = "goingDown";
    } else if (fromFloor < toFloor) {
      elevator.state = "goingUp";
    } else {
      elevator.state = "arrived";
      setTimeout(() => (elevator.state = "open"), 500);
    }

    if (elevator.onFloor === toFloor) {
      setTimeout(() => (elevator.state = "free"), 5000);
      return;
    }

    //wait 1/2 second to indicate call of elevator
    const move = setInterval(() => {
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
    console.log("arrrived");
  }

  getDistance(from, to, floorHeight) {
    Math.abs(from - to) * floorHeight;
  }

  initElevators() {
    let elevators = [];
    for (let i = 0; i < this.numOfElevators; i++) {
      elevators[i] = {
        num: i,
        onFloor: Math.floor(Math.random() * this.numOfFloors),
        state: "free" // 'goingUp', 'goingDown', open', 'closing'
      };
    }
    return elevators;
  }

  getUserInput(elevator, input) {
    console.log(elevator, input);
  }

  addElevator() {
    this.elevators.push({
      num: this.elevators.length,
      onFloor: Math.floor(Math.random() * this.numOfFloors),
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
