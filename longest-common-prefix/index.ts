const longestCommonPrefix = (strs: Array<string>): string => {
    let prefix = [];
    const firstWord = strs[0];

    if (strs.length === 1) {
        prefix = strs;
    } else {
        for (let letterPosition=0; letterPosition < firstWord.length; letterPosition++) {
            for (let wordsPosition=1; wordsPosition < strs.length; wordsPosition++) {
                if (firstWord[letterPosition] === strs[wordsPosition][letterPosition]) {
                    if (wordsPosition === strs.length - 1) {
                        prefix.push(firstWord[letterPosition]);
                    }
                } else {
                    break;
                }
            }
            if (prefix.length < firstWord.indexOf(firstWord[letterPosition]) + 1) {
                break;
            }
        }
    }

    return prefix.join('');
}




const test1 = ["flower","flow","flight"];
const test2 = ["dog","racecar","car"];
const test3 = ["kit", "kitchen", "kitten", "kitkat"];
const test4 = ["a"];
const test5 = ["cir", "car"];

console.log(longestCommonPrefix(test3));