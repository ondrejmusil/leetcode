// Link to the task
// https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        const higherNumber = nums.find(el => el > target);
        if (higherNumber) {
            // target replaces higher number
            return nums.indexOf(higherNumber);
        } else {
            // should be added to the last position => index === length
            return nums.length
        }
    }
};

const test1 = {
    nums: [1,3,5,6],
    target: 5
} // 2

const test2 = {
    nums: [1,3,5,6],
    target: 2
} // 1

const test3 = {
    nums: [1,3,5,6],
    target: 7
} // 4

console.log(searchInsert(test3.nums, test3.target));