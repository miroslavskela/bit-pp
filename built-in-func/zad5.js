/*Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/

"use strict";

function convertStringToArray(str) {
    var newArr = str.split(" ");
    return newArr;
}
console.log(convertStringToArray("John marshmellow"));
