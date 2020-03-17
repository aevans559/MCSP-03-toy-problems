/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral !== 'string') {
    return null;
  }

  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral]
  }

  let result = 0;
  // put the characters of the string into an array
  let romanArray = romanNumeral.split('');
  let base = DIGIT_VALUES[romanArray[0]];
  let left, right;
  // iterate through the array and find the highest value
  for (let i = 0; i < romanArray.length; i++) {
    // save the highest value as a base
      if (DIGIT_VALUES[romanArray[1]] > base) {
        base = DIGIT_VALUES[romanArray[1]];
        left = DIGIT_VALUES[romanArray[0]];
      } else {
        right = DIGIT_VALUES[romanArray[1]]    
      }
    }

  result += base;

  // check for elements to left of base value and subtract those elements
  if (left < base) {
    result -= left;
    // check for elements to right of base value and add those elements
  } else if (right > base) {
    result += right;
  } else if (base === base) {
    result += right
  } else {
    return result;
  }

  // return final result value
  return result;
};
