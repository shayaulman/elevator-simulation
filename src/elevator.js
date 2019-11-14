export default class ElevatorSystem {
  constructor(numOfFloors, numOfElevators) {
    this.numOfFloors = numOfFloors;
    this.numOfElevators = numOfElevators;
    this.floorHeight = 40;
    this.elevators = this.initElevators();
    this.queue = [];
    this.goButtonPressed = false;
  }

  initElevators() {
    let elevators = [];
    for (let i = 0; i < this.numOfElevators; i++) {
      elevators[i] = {
        num: i,
        onFloor: Math.floor(Math.random() * this.numOfFloors),
        target: "",
        state: "free" // 'goingUp', 'goingDown', 'open' 'waiting',
      };
    }
    return elevators;
  }

  callElevator(toFloor) {
    // this.elevators.forEach(e => console.log(e.state));
    if (this.freeElevators().length === 0 && !this.isInQueue(toFloor)) {
      // console.log("Putting in queue...");
      this.putInQueue(toFloor);
      this.watchForFreeElevators();
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
    if (bestChoise.target !== "") {
      return;
    }
    // bestChoise.target = toFloor;
    // console.log(bestChoise.target);
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
      // console.log(elevator.state);
      if (elevator.state === "goingUp") {
        elevator.onFloor += 0.1;
      } else {
        elevator.onFloor -= 0.1;
      }

      // bad approach fix
      if (elevator.onFloor.toFixed(6) < 0) {
        this.resetElevator(elevator, "down");
        clearInterval(move);
      } else if (elevator.onFloor.toFixed(6) > this.numOfFloors + 1) {
        this.resetElevator(elevator, "up");
        clearInterval(move);
      }

      if (+elevator.onFloor.toFixed(6) === toFloor) {
        elevator.onFloor = +elevator.onFloor.toFixed();
        clearInterval(move);
        elevator.state = "arrived";
        if (this.isInQueue(elevator.target)) {
          console.log("hello");
          this.removeFromQueue(elevator);
        }
        elevator.target = "";
        setTimeout(() => (elevator.state = "open"), 500);
        setTimeout(() => this.updateElevatorState(elevator), 6000);
      }
    }, 100);
  }

  updateElevatorState(elevator) {
    // if (elevator.state !== "waiting") elevator.state = "free";

    if (elevator.state === "open") {
      // console.log("updateElevatorState func is called");
      elevator.state = "free";
    }
  }

  holdDoors(i) {
    this.elevators[i].state = "waiting";
  }

  closeDoorsAndGo(i, toFloor) {
    // if ordered elevator and did'n use
    // setTimeout(() => {
    //   this.closeDoors(i);
    // }, 10000);
    if (toFloor === "") return;
    // this.elevators[i].state = "free";
    this.goButtonPressed = false;
    setTimeout(() => {
      this.goToFloor(this.elevators[i], this.elevators[i].onFloor, +toFloor);
    }, 800);
  }

  closeDoors(i, goButton) {
    if (goButton) return;
    if (this.elevators[i].state === "waiting" && !this.goButtonPressed) {
      this.elevators[i].state = "free";
      console.log("closeDoors func is called");
    }
  }

  /*  Helper functions  */

  freeElevators() {
    const freeElevators = this.elevators.filter(
      elevator => elevator.state === "free"
    );
    console.log(freeElevators);
    return freeElevators;
  }

  resetElevator(elevator, direction) {
    console.log("reset func called");
    elevator.target = "";
    elevator.state = "free";
    if (direction === "up") {
      elevator.onFloor = this.numOfFloors;
    } else {
      elevator.onFloor = 0;
    }
  }

  /*  Queue handling  */

  watchForFreeElevators() {
    const watch = setInterval(() => {
      if (watching) return;
      let watching;
      if (this.freeElevators().length > 0) {
        console.log("found free elevator!");
        this.callElevator(this.queue[0]);
        this.removeFromQueue(this.queue[0]);
        clearInterval(watch);
        watching = false;
      } else {
        watching = true;
        console.log("watching...", watching);
      }
    }, 500);
  }

  isInQueue(elevator) {
    return this.queue.includes(elevator);
  }

  putInQueue(elevator) {
    this.queue.push(elevator);
  }

  removeFromQueue(elevator) {
    const index = this.queue.indexOf(elevator);
    this.queue.splice(index, 1);
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
    if (this.elevators.length < 3) return;
    this.elevators.pop();
  }

  addFloor() {
    this.numOfFloors++;
  }

  removeFloor() {
    if (this.numOfFloors < 3) return;
    this.numOfFloors--;
    this.outOfRange();
  }

  updateFloorHeight(updatedHeight) {
    this.floorHeight = updatedHeight;
  }

  outOfRange() {
    for (let i = 0; i < this.elevators.length; i++) {
      if (this.elevators[i].onFloor > this.numOfFloors - 1) {
        this.elevators[i].onFloor = Math.floor(
          Math.random() * this.numOfFloors
        );
      }
    }
  }
}
