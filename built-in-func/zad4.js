/*Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they are sorted from A to Z.*/

"use strict";

function alphabetalize(str) {
    var newString1 = str.split(" ");
    var result = "";

    for (var i = 0; i < newString1.length; i++) {
            var word = newString1[i];
            var newStr = word.toLowerCase().split("").sort().join("");
             result += newStr + " ";
        
    }
    return result;

}
console.log(alphabetalize("Republi of Serbia"));