/*Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/
/*function replaceSpaces(str, separator) {
    var changed;
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            str[i] === separator;
            
        }
    }
   return str;
}
console.log(replaceSpaces("my radnom string", "+"));
*/

/*
function strToArr(str, character){
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
        if(arr[i] == ' ' && typeof character === 'undefined'){
            arr[i] = '-';
       
        } 
        else if(arr[i] === ' '){
            arr[i] = character;
        }
     return arr;
}
}
console.log(strToArr("Matija Ljuba", ))*/

function convert(string,char) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr[i] = string[i];
        if(arr[i] == ' ' && typeof char === "undefined"){
            arr[i] = "-";
        } else if(arr[i] === ' '){
            arr[i] = char;
        }
    };
   
    return arr;
}
console.log(convert(" ds a ", "$"))