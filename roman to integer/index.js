var Values = {
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
    'M': 1000
};
function romanToInt(s) {
    var sum = 0;
    var letters = s.trim().split('');
    var length = letters.length;
    console.log(letters);
    for (var i = 0; i < length; i++) {
        var letter = letters[i];
        var nextLetter = letters[i + 1];
        console.log("sum: " + sum + ", iteration: " + i + ", letter: " + letter);
        if (letter === 'I' && (nextLetter === 'V' || nextLetter === 'X')) {
            sum = sum + Values["" + letter + nextLetter];
            i++;
        }
        else if (letter === 'X' && (nextLetter === 'L' || nextLetter === 'C')) {
            sum = sum + Values["" + letter + nextLetter];
            i++;
        }
        else if (letter === 'C' && (nextLetter === 'D' || nextLetter === 'M')) {
            sum = sum + Values["" + letter + nextLetter];
            i++;
        }
        else {
            sum = sum + Values[letter];
        }
    }
    return sum;
}
;
var test1 = 'III';
var test2 = 'LVIII';
var test3 = 'IV';
var test4 = 'MCMXCIV';
var test5 = 'M';
console.log(romanToInt(test2));
