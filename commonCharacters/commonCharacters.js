/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var commonCharacters = function(string1, string2) {
    // TODO: Your code here!
    let string3 = [];

    for (let letter of string1) {
        for (let char of string2) {
            if (letter === char) {
                string3.push(letter)
            }
        }
    }

    let object = {};

    string3.forEach(element => {
        if (!object[element]) {
            object[element] = 1;
        }
    })

    let finalArr = [];

    for (let obj in object) {
        finalArr.push(obj);
    }

    let newString = finalArr.join('');

    return newString;   
};

console.log(commonCharacters('aacexivou', 'aaegihobu'))