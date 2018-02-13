//Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

'use strict';
var myArr = [132, 2123,null, 23, 14, 421415, 36, 7];

function maxElement(arr) {
var max = 0;
for(var i = 0; i < arr.length; i++){
    
        if (typeof arr[i] === "number" && arr[i]>max) {
            var max = arr[i];
        }else {
            var max = max;
        }
    
}return max;
   
}
console.log(maxElement(myArr));