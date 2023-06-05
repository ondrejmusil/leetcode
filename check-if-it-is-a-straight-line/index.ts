// Link to the task
// https://leetcode.com/problems/check-if-it-is-a-straight-line/
// {Used solution: tan(alfa) = |a| / |c| => https://www.matweb.cz/goniometrie/}

function checkStraightLine(coordinates: number[][]): boolean {
    let tempResult = true;
    let angle: number;
    let isXEqual = true;
    let isYEqual = true;

    // checks whether all X or Y values are the same
    for (let x = 0; x < coordinates.length - 1; x++) {
        if (isXEqual || isYEqual) {
            // X values
            if (coordinates[x][0] !== coordinates[x + 1][0]) isXEqual = false;
            // Y values
            if (coordinates[x][1] !== coordinates[x + 1][1]) isYEqual = false;
        }
    }

    // In case all X or Y value are same, return true and end process
    if (isXEqual || isYEqual) {
        return true;
    } else {
        for (let i = 1; i < coordinates.length; i++) {
            // tan(alfa) = a/c => (x1-x0)/(y1-y0)
            const sideA = coordinates[i][0] - coordinates[i - 1][0]; // a
            const sideC = coordinates[i][1] - coordinates[i - 1][1]; // c

            // sets new value of tan alfa that all future angles are compared to
            if (i === 1) {
                angle = sideA / sideC
            }

            if ((sideA / sideC) !== angle) tempResult = false
        }

        return tempResult;
    }
};

const test1 = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]; // true
const test2 = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]; // false
const test3 = [[0, 0], [0, 1], [0, -1]]; // true
const test4 = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]]; // true

console.log(checkStraightLine(test4));