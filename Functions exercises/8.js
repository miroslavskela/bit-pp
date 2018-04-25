// Write a function that calculates a number of appearances of a given number in a given array.
"use strict"
var array1 = [1,2,3,4,5,5,7,2,4];
function numOfAppear(a){
    var counter = 0;
    for (var i = 0; i < array1.length; i++){
 if(array1[i] === a){
     counter++
 }
    }
    return counter
} 
console.log(numOfAppear(1));