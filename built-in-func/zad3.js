/*Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw” */ 

"use strict"
function alphabetOrder(str){
var newStr = str.toLowerCase().split("").sort().join("");
 return newStr;
}

console.log(alphabetOrder("aabsvuhAHg"));