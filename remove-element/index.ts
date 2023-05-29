// Link to the task:
// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
}

const test1 = {
    nums: [3,2,2,3],
    val: 3
};

const test2 = {
    nums: [0,1,2,2,3,0,4,2],
    val: 2
};

console.log(removeElement(test2.nums, test2.val));