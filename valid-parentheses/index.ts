// Link to the task:
// https://leetcode.com/problems/valid-parentheses/

const validPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
}

function isValid(s: string): boolean {
    if (s.length > 1 && s.length % 2 === 0) {
        const temp = [];
        const pairs = s.split('');

        for (let i = 0; i < pairs.length; i++) {
            if (temp.length < 1) {
                temp.push(pairs[i]);
            } else if (validPairs[temp[temp.length - 1]] !== pairs[i]) {
                temp.push(pairs[i]);
            } else {
                temp.pop();
            }
        }

        if (temp.length > 0) {
            return false
        } else {
            return true;
        }
    } else {
        return false;
    }
}

const test1 = '()';
const test2 = '()[]{}';
const test3 = '(]';
const test4 = '(){}{]';
const test5 = '{[]}';

console.log(isValid(test5));