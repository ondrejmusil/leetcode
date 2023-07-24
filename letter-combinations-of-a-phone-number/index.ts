// Link to the task
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const NumLetters: Record<number, Array<string>> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function letterCombinationsHelper(digits: string, currentCombination: string, index: number, result: Array<string>): Array<string> {
    // If all digits were processed, return the result
    if (index === digits.length) {
        result.push(currentCombination);
        return result;
    }

    // Get letters corresponding to current digit
    const letters = NumLetters[digits[index]];

    // for each letter of the letters array find all possible combinations
    for (const letter of letters) {
        letterCombinationsHelper(digits, currentCombination + letter, index + 1, result);
    }
}

function letterCombinations(digits: string): string[] {
    if (!digits || digits.length === 0) return [];

    const results = [];
    letterCombinationsHelper(digits, '', 0, results);
    return results;
}

console.log(letterCombinations('2')); // [ 'a', 'b', 'c' ]
console.log(letterCombinations('')); // []
console.log(letterCombinations('234')); // [   'adg', 'adh', 'adi', 'aeg',   'aeh', 'aei', 'afg', 'afh',   'afi', 'bdg', 'bdh', 'bdi',   'beg', 'beh', 'bei', 'bfg',   'bfh', 'bfi', 'cdg', 'cdh',   'cdi', 'ceg', 'ceh', 'cei',   'cfg', 'cfh', 'cfi' ]
