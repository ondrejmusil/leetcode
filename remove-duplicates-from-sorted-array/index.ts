function removeDuplicates(nums: number[]): number {

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
}

const test1 = [1,1,2];
const test2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(test2));