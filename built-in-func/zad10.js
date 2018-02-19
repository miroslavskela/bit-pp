/*Write a program that accepts a string as input and swaps the case of each character.
 For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

"use strict"

function swaps(str) {
      var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var LOWER = 'abcdefghijklmnopqrstuvwxyz';
      var changedStr = "";
      var arr = str.split('');
      for (var i = 0; i < arr.length; i++) {
            if (arr[i] === LOWER.match(arr[i])) {
                  arr[i] = arr[i].toUpperCase();


                  changedStr += arr[i];
            } else {
                  arr[i].toLowerCase();
                  changedStr += arr[i];
            }
      }
      return changedStr;
}
console.log(swaps("tHE qUICK bROWN fOX"));