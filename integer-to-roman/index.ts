// Link to the task
// https://leetcode.com/problems/integer-to-roman/

const Values: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

function intToRoman(num: number): string {
    let result = '';

    for (let n in Values) {
        const count = num / Values[n];

        if (count >= 1) {
            result += n.repeat(count);
            num = num % Values[n];
        }
    }

    return result;
};

const test1 = 3; // III
const test2 = 58; // LVIII
const test3 = 1994; // MCMXCIV
const test4 = 1000; // MMM
const test5 = 40; // XL

console.log(intToRoman(test1));