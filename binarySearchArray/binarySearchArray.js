/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */


var binarySearch = function(array, target) {
    let centerIndex = Math.floor(array.length / 2);
    let middleElement = array[centerIndex];
    let startingIndex;

    if (!array.includes(target)) {
        return null;
    };

    if (middleElement === target) {
        return centerIndex
    } else if (middleElement < target) {
        startingIndex = centerIndex + 1;
        for (let i = startingIndex; i < array.length; i--) {
            if (array[i] === target) {
                return i;
            }
        }
    } else if (middleElement > target) {
        startingIndex = centerIndex - 1;
        for (let j = startingIndex; j < array.length; j++) {
            if (array[j] === target) {
                return j;
            }
        }
    }
};



