"use strict";

// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function oddNumOfElements(arr) {
    return arr.length % 2 !== 0;
}

var a = [1, 2, 9, 2, 1];
console.log(oddNumOfElements(a));
