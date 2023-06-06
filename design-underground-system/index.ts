// Link to the task
// https://leetcode.com/problems/design-underground-system/

class UndergroundSystem {
    mappings;
    averages;

    constructor() {
        this.mappings = new Map<number, Object>;
        this.averages = new Map<string, Array<number>>;
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.mappings[id] = {checkIn: {stationName: stationName, time: t}};
    }

    checkOut(id: number, stationName: string, t: number): void {
        // add new input to mappings - checkOut
        this.mappings[id].checkOut = {stationName: stationName, time: t};
        // start station details
        const startStation = this.mappings[id].checkIn.stationName;
        const startStationTime = this.mappings[id].checkIn.time;
        // connection string
        const connection = `${startStation}-${stationName}`;
        // final Time of connection
        const finalTime = (this.mappings[id].checkOut.time - startStationTime);

        if (!this.averages.has(connection)) {
            this.averages.set(connection, [finalTime])
        } else {
            this.averages.get(connection).push(finalTime);
        }
    }

    getAverageTime(startStation: string, endStation: string): number {
        const connection = `${startStation}-${endStation}`;
        const sum = this.averages.get(connection).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const length = this.averages.get(connection).length;

        return sum / length;
    }
}

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24);
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12