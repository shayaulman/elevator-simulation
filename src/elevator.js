export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 40;
    this.msEachFloor = 1500;
    this.elevators = this.initElevators();
  }

  callElevator(toFloor) {
    const freeElevators = this.elevators.filter(
      elevator => !elevator.isEngaged
    );

    const closest = freeElevators.sort((a, b) => {
      if (Math.abs(a.onFloor - toFloor) === Math.abs(b.onFloor - toFloor)) {
        return b.onFloor - a.onFloor;
      }

      return Math.abs(a.onFloor - toFloor) - Math.abs(b.onFloor - toFloor);
    })[0];

    this.goToFloor(closest, closest.onFloor, toFloor);
  }

  goToFloor(elevator, fromFloor, toFloor) {
    elevator.isEngaged = true;
    elevator.doors = "opening";
    //wait 1/2 second to indicate call of elevator
    setTimeout(() => {
      elevator.onFloor = toFloor;
      elevator.isEngaged = false;
    }, 333);
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
        isEngaged: false,
        traveling: false,
        doors: "closed" // 'closing', 'opening'
      };
    }
    return elevators;
  }
  timeToTravel(fromFloor, toFloor, msEachFloor) {
    const increasing = [fromFloor, toFloor].sort((a, b) => a - b);
    return increasing[1] - increasing[0] * msEachFloor;
  }

  addElevator() {
    this.elevators.push({
      num: this.elevators.length,
      onFloor: Math.floor(Math.random() * this.numOfFloors),
      isEngaged: false,
      traveling: false,
      doors: "closed"
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
