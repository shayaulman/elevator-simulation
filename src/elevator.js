export default class Elevator {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.msEachFloor = 500;
    this.elevators = this.initElevators();
  }

  callElevator(fromFloor, toFloor) {
    let bestChoice;
    const freeElevators = this.elevators.filter(
      elevator => !elevator.isEngaged
    );
    freeElevators.sort(
      (a, b) => fromFloor - a.onFloor - (fromFloor - b.onFloor)
    );

    console.log(freeElevators);
    bestChoice = freeElevators[0];

    return { elevator: bestChoice, fromFloor: fromFloor, toFloor: toFloor };
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
      elevators[i] = { num: i, onFloor: 0, isEngaged: false };
    }
    return elevators;
  }
  timeToTravel(fromFloor, toFloor, msEachFloor) {
    const increasing = [fromFloor, toFloor].sort((a, b) => a - b);
    return increasing[1] - increasing[0] * msEachFloor;
  }
}
