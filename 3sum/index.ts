// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
    const sortedNums = nums.sort((a, b) => a - b);
    const res: number[][] = [];

    sortedNums.forEach((num, index) => {
        // Skip numbers that are same as previous one
        if (index > 0 && num === sortedNums[index - 1]) return;

        // Declare 2 pointers
        let left = index + 1;
        let right = sortedNums.length - 1;

        while (left < right) {
            let sum = num + sortedNums[left] + sortedNums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                res.push([num, sortedNums[left], sortedNums[right]]);
                left++;

                // Iterate to the first different number from the previous one
                while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
            }
        }
    })

    return res;
};

const test1 = [-1,0,1,2,-1,-4] // [[-1,-1,2],[-1,0,1]]
const test2 = [0,1,1] // []
const test3 = [0,0,0] // [[0,0,0]]
const test4 = [0,0,0,0] // [[0,0,0]]

console.log(threeSum(test4));