//Write a function to find the median element of array.

"use strict";
var newNiz = [3, 6, 7, 9, 5, 2, 10];
var result = "";
var i = 0;

function median(niz) {
    newNiz.sort(function (a, b) {
        return a - b
    });

    if (newNiz.length % 2 !== 0) {
        i = (newNiz.length - 1 )/ 2 ;
        result = newNiz[i];
    }
    return result;
}
console.log(median(newNiz));