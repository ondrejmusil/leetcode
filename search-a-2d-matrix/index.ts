// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
    let index: number;

    for (let i = 0; i < matrix.length; i++) {
        const firstNum = matrix[i][0];
        const lastNum = matrix[i][matrix[i].length - 1];

        if (firstNum <= target && lastNum >= target) index = i;
    }

    if (index === undefined) return false;
    return matrix[index].includes(target);
};

// true
const test1 = {
    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    target: 3
}

// false
const test2 = {
    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    target: 13
}

// true
const test3 = {
    matrix: [[1]],
    target: 1
}

console.log(searchMatrix(test2.matrix, test2.target));