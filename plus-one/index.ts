// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] ++;
            return digits;
        }

        digits[i] = 0;
    }

    digits = new Array(digits.length + 1).fill(0);
    digits[0] = 1;
    return digits;
};

const test1 = [1,2,3] // [1,2,4]
const test2 = [4,3,2,1] // [4,3,2,2]
const test3 = [9] // [1,0]
const test4 = [9,9] // [1,0,0]

console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
console.log(plusOne(test4));