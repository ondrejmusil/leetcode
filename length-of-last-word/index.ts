// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    const wordsArray = s.trim().split(' ');

    return wordsArray[wordsArray.length - 1].length;
};

const test1 = 'Hello World'; // 5
const test2 = '   fly me   to   the moon  '; // 4
const test3 = 'luffy is still joyboy'; // 6

console.log(lengthOfLastWord(test3));