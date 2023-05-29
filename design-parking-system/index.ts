// Link to the task:
// https://leetcode.com/problems/design-parking-system/

class ParkingSystem {
    parkingSpots: Object;

    constructor(big: number, medium: number, small: number) {
        this.parkingSpots = {
            1: big,
            2: medium,
            3: small
        }
    }

    addCar(carType: number): boolean {
        if (this.parkingSpots[carType] > 0) {
            this.parkingSpots[carType]--;
            return true
        } else {
            return false;
        }
    }
}

// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
const test1 = [[1, 1, 0], [1], [2], [3], [1]];

const parkingSystem = new ParkingSystem(1,1,0);

[test1[1], test1[2], test1[3], test1[4]].forEach(it => {
    console.log(parkingSystem.addCar(it[0]));
});
