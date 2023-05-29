// Link to the task:
// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
    let x = 0;
    let twoNumbersResult = [];

    for(x; x < nums.length; x++) {
        for(let y = x + 1; y < nums.length; y++) {
            if (nums[x] + nums[y] === target) {
                twoNumbersResult.push(x, y);
            }
        }
    }

    return twoNumbersResult;
};

const test1 = {
    nums: [2,7,11,15],
    target: 9
}

const test2 = {
    nums: [3,2,4],
    target: 6
}

const test3 = {
    nums: [3,3],
    target: 6
}

console.log(twoSum(test3.nums, test3.target));