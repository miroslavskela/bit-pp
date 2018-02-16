/* Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
 */

'use strict';

function countVowels(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                counter++;
                break;
            case "e":
                counter++;
                break;
            case "i":
                counter++;
                break;
            case "o":
                counter++;
                break;
            case "u":
                counter++;
                break;


            default:
                break;
        }
    } return counter;
} console.log(countVowels("dijana djordjevic"));
