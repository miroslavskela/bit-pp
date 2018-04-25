// Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function replaceSpaces(str, separator){
    var array1 = [];
    var newStr = ""
    for (var i = 0; i < str.length; i++){
        array1[i] = str[i]
        if(str[i] === " "){
            array1[i] = separator
        } else if (separator === undefined && str[i] === " " ){
            array1[i] = "-"
        }
    }
    for (var i = 0; i < array1.length; i++){
        newStr += array1[i]
    }
    return newStr;
}
 console.log(replaceSpaces("My random string.", "*"));