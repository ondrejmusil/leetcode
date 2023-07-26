// https://leetcode.com/problems/powx-n/

function myPow(x: number, n: number): number {
    return Math.pow(x, n);
};

const test1 = myPow(2.00000, 10); // 1024.00000
const test2 = myPow(2.10000, 3); // 9.26100
const test3 = myPow(2.00000, -2); // 0.25000

[test1, test2, test3].forEach(el => {
    console.log(el);
})