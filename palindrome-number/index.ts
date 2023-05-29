// Link to the task:
// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
    if(x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }

    let revertedNumber = 0;

    while(x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}

const test1 = 121;
const test2 = -121;
const test3 = 10;

console.log(isPalindrome(test3));