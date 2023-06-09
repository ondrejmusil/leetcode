// Link to the task:
// https://leetcode.com/problems/roman-to-integer/

const Values = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M':1000
}


function romanToInt(s: string): number {
    let sum = 0;

    const letters = s.trim().split('');
    let length = letters.length;

    console.log(letters);

    for (let i = 0; i < length; i++) {
        var letter = letters[i];
        var nextLetter = letters[i+1];
        console.log(`sum: ${sum}, iteration: ${i}, letter: ${letter}`);

        if (letter === 'I' && (nextLetter === 'V' || nextLetter === 'X')) {
            sum = sum + Values[`${letter}${nextLetter}`];
            i++;
        } else if (letter === 'X' && (nextLetter === 'L' || nextLetter === 'C')) {
            sum = sum + Values[`${letter}${nextLetter}`];
            i++;
        } else if (letter === 'C' && (nextLetter === 'D' || nextLetter === 'M')) {
            sum = sum + Values[`${letter}${nextLetter}`];
            i++;
        } else {
            sum = sum + Values[letter];
        }
    }

    return sum;
};

const test1 = 'III';
const test2 = 'LVIII';
const test3 = 'IV';
const test4 = 'MCMXCIV';
const test5 = 'M';

console.log(romanToInt(test2));