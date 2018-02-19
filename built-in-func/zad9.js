/*Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"
*/

"use strict";
function hideEmail(str) {
    var position = str.split("@");
    var pos1 = position[0];
    var pos2 = position[1];
    var avg = pos1.length / 2;
    pos1 = pos1.substring(0, (pos1.length - avg));
  
    return pos1 + "...@" + pos2;

}
console.log(hideEmail("somerandomaddress@example.com"));


