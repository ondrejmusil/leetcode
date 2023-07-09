// Link to the task
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// SOLUTION 1 - SLIDING WINDOW
function lengthOfLongestSubstring(s: string): number {
    let longestString: number = 0;
    let left = 0;
    const visited = new Set();

    for (let right = 0; right < s.length; right++) {
        while (visited.has(s[right])) {
            visited.delete(s[left]);
            left++;
        }

        visited.add(s[right]);
        longestString = Math.max(longestString, right - left + 1);
    }

    return longestString;
}


// SOLUTION 2 [complexity O(n^3)] - extremely slow for long input strings
function lengthOfLongestSubstring2(s: string): number {
    let longestString = '';

    // loop from the beginning to the end
    for (let i = 0; i < s.length; i++) {
        // loop from the end of the substring to the beginning
        for (let j = s.length; j > i; j--) {
            const currentStr = s.substring(i, j);
            if (new Set(currentStr).size === currentStr.length && currentStr.length > longestString.length) {
                longestString = currentStr;
            }
        }
    }

    return longestString.length;
}

const test1 = 'abcabcbb'; // 3
const test2 = 'bbbbb'; // 1
const test3 = 'pwwkew'; // 3
const test4 = 'pwwkepa'; // 5
const test5 = 'dvdf'; // 3
const test6 = 'anviaj'; // 5

[test1, test2, test3, test4, test5, test6].forEach(el => {
    console.log(lengthOfLongestSubstring(el));
});