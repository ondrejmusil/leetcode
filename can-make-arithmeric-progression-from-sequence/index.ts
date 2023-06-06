// Link to the task
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

function canMakeArithmeticProgression(arr: number[]): boolean {
    let arithmeticProgression = true;
    const sortedArray = arr.sort((a,b) => a - b);
    const difference = Math.abs(sortedArray[1] - sortedArray[0]);

    for (let i = 1; i < sortedArray.length; i++) {
        if (arithmeticProgression) {
            if (Math.abs(sortedArray[i] - sortedArray[i - 1]) !== difference) arithmeticProgression = false;
        } else {
            return false;
        }
    }

    return arithmeticProgression;
};

const test1 = [3,5,1]; // true
const test2 = [1,2,4]; // false
const test3 = [-1,1,3]; // true
const test4 = [-3,-1,1,3]; // true


console.log(canMakeArithmeticProgression(test4));
