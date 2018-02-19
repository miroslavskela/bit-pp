/*Write a function to convert a number from one base (radix) to another*/
"use strict";
function convertNum(str, fromBase, toBase) {
   var num = parseInt(str,fromBase);
   // return num.toString(2);
    
    return  num.toString(toBase);
}

console.log(convertNum("100101", 2, 8 ));
