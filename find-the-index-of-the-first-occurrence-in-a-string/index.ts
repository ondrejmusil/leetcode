// Link to the task
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

function strStr(haystack: string, needle: string): number {
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    } else {
        return -1;
    }
}

const test1 = {haystack: 'sadbutsad', needle: 'sad'};
const test2 = {haystack: 'leetcode', needle: 'leeto'};
const test3 = {haystack: 'dogcatmouse', needle: 'cat'};

console.log(strStr(test3.haystack, test3.needle));