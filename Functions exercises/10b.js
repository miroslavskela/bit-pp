// Write a function to get the first n characters and add “...” at the end of newly created string.

function substringChar(str, n){
    var newStr = ""
    for (var i = 0; i < n; i++){
        newStr += str[i]
    }
    return newStr +"..."
}
console.log(substringChar("Neki random string, mnogo dosadan", 11));
