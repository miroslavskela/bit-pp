//Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

'use strict';
var myArr = [132, 2123, 23, 14, 421415, 36, 7];

function maxElement(arr) {

    var max = Math.max(myArr);
    return max;
}
console.log(maxElement(myArr));