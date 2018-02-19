/*Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'L' -> 0123 
'00000000', 123, '' -> 12300000
*/

"use strict";

function pad(str1,  str2, str3) {
   if (str3 !== "L") {
    var padd =  str2.padEnd(str1.length, 0);
       
   }
   else{
       var padd = str2.padStart(str1.length, 0);
   }
   return padd;

}
console.log(pad('0000','123', "L" ))

