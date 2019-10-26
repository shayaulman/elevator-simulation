export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 40;
    this.msEachFloor = 500;
    this.elevators = this.initElevators();
    this.i = 0;
  }

  callElevator(toFloor) {
    let freeElevators = this.elevators
      .filter(elevator => !elevator.isEngaged)
      .sort((a, b) => {
        return a.onFloor - toFloor < 0 ? a.onFloor - b.onFloor : -1;
      });
    console.log(freeElevators);

    freeElevators[0].onFloor = toFloor;
  }

  goToFloor(elevator, fromFloor, toFloor) {
    this.elevators[elevator.num].isEngaged = true;

    setTimeout(() => {
      this.elevators[elevator.num].onFloor = toFloor;
      this.elevators[elevator.num].isEngaged = false;
    }, this.timeToTravel(fromFloor, toFloor, this.msEachFloor));
  }

  initElevators() {
    let elevators = [];
    for (let i = 0; i < this.numOfElevators; i++) {
      elevators[i] = {
        num: i,
        onFloor: Math.floor(Math.random() * this.numOfFloors),
        isEngaged: Math.random() < 0.3 ? true : false
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
      isEngaged: false
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
    console.log("test");
    this.floorHeight = updatedHeight;
    console.log(this.floorHeight);
  }
}
