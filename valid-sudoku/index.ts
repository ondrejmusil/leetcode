// https://leetcode.com/problems/valid-sudoku/

function isValidSudoku(board: string[][]): boolean {
    let rowsCheck = true;
    let columnCheck = true;
    let boxCheck = true;

    // A) Check row
    board.forEach(row => {
        // ["5","3",".",".","7",".",".",".","."]
        const valuesOnly = row.filter(it => it !== '.');
        const uniqueValues = new Set(valuesOnly);

        if (valuesOnly.length !== uniqueValues.size) rowsCheck = false;
    });

    // B) Check column
    let columnValues: string[][] = Array.from({length: 9}, () => []);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 9; j++) {
            columnValues[j].push(board[i][j]);
        }
    }

    columnValues.forEach(column => {
       const valuesOnly = column.filter(it => it !== '.');

       if (valuesOnly.length !== new Set(valuesOnly).size) columnCheck = false;
    });

    // C) Check box 3x3
    // 1) Get three rows => 0-2, 3-5, 6-8
    for (let threeRows = 0; threeRows < board.length; threeRows += 3) {
        let box1: string[] = [];
        let box2: string[] = [];
        let box3: string[] = [];

        // 2) Loop through 3 row => x1, x2, x3
        for (let i = threeRows; i < threeRows + 3; i++) {
            // 3) Loop through each row and push nums to dedicated array
            for (let j = 0; j < 9; j++) {
                const num = board[i][j];

                if (j < 3) {
                    box1.push(num);
                } else if (j < 6) {
                    box2.push(num);
                } else {
                    box3.push(num)
                }
            }
        }

        // Filter out empty fields
        const [box1Filtered, box2Filtered, box3Filtered] = [box1, box2, box3].map(el => el.filter(it => it !== '.'))
        // Create new Sets of unique values
        const [box1Unique, box2Unique, box3Unique] = [box1Filtered, box2Filtered, box3Filtered].map(el => new Set(el));
        // check if any box includes invalid combination
        if (box1Filtered.length !== box1Unique.size || box2Filtered.length !== box2Unique.size || box3Filtered.length !== box3Unique.size) boxCheck = false;
    }

    // if all checks are OK, return true
    return rowsCheck && columnCheck &&boxCheck;
}

// true
const test1 =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

// false
const test2 =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

// false
const test3 =
    [[".", ".", "4", ".", ".", ".", "6", "3", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["5", ".", ".", ".", ".", ".", ".", "9", "."],
        [".", ".", ".", "5", "6", ".", ".", ".", "."],
        ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
        [".", ".", ".", "7", ".", ".", ".", ".", "."],
        [".", ".", ".", "5", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."]]

console.log(isValidSudoku(test1));
console.log(isValidSudoku(test2));
console.log(isValidSudoku(test3));