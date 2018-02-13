// Write a function that takes a number and returns array of its digits.


"use strict";
function digitsArray(num){
    var str = num + "";
    var newNiz = [];
    for(var i = 0; i < str.length; i++){
        newNiz[i] = str[i];
    }return newNiz;
}
console.log(digitsArray(123456789));