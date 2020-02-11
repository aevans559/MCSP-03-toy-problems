// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
    let obj = {};
    let result = [];

    for (let char of str) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }

    for (let [key, value] of Object.entries(obj)) {
        result.push([key, value])
    }
    
    let sorted = result.sort((a, b) => {
        if (a[1] - b[1] === 0) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1];
        }
    });

    return sorted;  
}