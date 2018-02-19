/*Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"

*/

function capitalize(str) {
    var other = str.substring(1,(str.length-1));
    var newStr =str.charAt(0).toUpperCase();
    return newStr + other; 
}
console.log(capitalize("js string exercises"));
