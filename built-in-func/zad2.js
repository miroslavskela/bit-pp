//Write a JavaScript function that reverses a number.

"use strict";
function reverseNum(num){
    var str = num.toString();

    return str.split("").reverse().join("");
}
console.log(reverseNum(54321));