/* Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"
 */

function hideEmail(str, number) {
    newStr = "";
    newStr1 = "";
    newStr2 = "";
    for (i = number; i < str.length - 5; i++) {

        newStr += "."
        newStr = "..."

    } 
    for (i = 0; i < number; i++){
        newStr1+=str[i];
    }
    for (i = str.length - 5; i < str.length; i++){
        newStr2+=str[i];
    }

    return newStr1 + newStr + newStr2;
}
console.log(hideEmail("myemagdfgdfgdfiladdress@bgit.rs", 7));
