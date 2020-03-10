/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
    // reverse the string
    // compare the reversed string to the original string
    // find the longest instance where the elements inside of the indexes match

    let copyArray = string.split('');
    let reversed = string.split('').reverse();
    let copyCurrent;
    let reversedCurrent;
    let front;
    let back;

    debugger;
    if (JSON.stringify(copyArray) !== JSON.stringify(reversed)) {
        for (let i = 0; i < copyArray.length; i++) {
            copyCurrent = copyArray[i]
            front = copyArray[0]
        }
        
        for (let j = reversed.length; j > 0; j--) {
            reversedCurrent = reversed[j]
            back = reversed[0]
        }
    
        if (front !== back) {
            copyArray.shift();
            reversed.shift()
            // longestPalindrome(JSON.stringify(copyArray))
        } else if (copyCurrent !== reversedCurrent) {
            return 'no palindrome'
        } else {
            return JSON.stringify(copyArray)
        }
    } else {
        return JSON.stringify(copyArray)
    }
};

// console.log(longestPalindrome('My dad is a racecar athlete'));

// do {
//     if (copyArray[0] !== reversed[0]) {
//         copyArray.shift();
//         reversed.shift();
//     }
// } while (JSON.stringify(copyArray) !== JSON.stringify(reversed))
