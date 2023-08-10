function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sortedArray: number[] = [...nums1, ...nums2].sort((a: number,b: number) => a - b);

    if (sortedArray.length % 2 === 0) {
        const mid1: number = sortedArray[Math.floor(sortedArray.length / 2) - 1];
        const mid2: number = sortedArray[Math.ceil(sortedArray.length / 2)];

        return (mid1 + mid2) / 2;
    } else {
        return sortedArray[Math.floor(sortedArray.length / 2)];
    }
};

const test1 = {
    nums1: [1,3],
    nums2: [2],
    answer: 2
}

const test2 = {
    nums1: [1,2],
    nums2: [3,4],
    answer: 2.5
}

const test3 = {
    nums1: [-3,2],
    nums2: [3,-4],
    answer: -0.5
}

console.log(findMedianSortedArrays(test3.nums1, test3.nums2));