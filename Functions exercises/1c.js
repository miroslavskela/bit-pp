// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(str,str1, position){
   var prefix = "";
   var postfix = "";
if(position === undefined){
 newStr = str1 + " " + str
} else {
 for (var i = 0; i < position; i++){
    prefix += str[i]
 }
 prefix +=  str1 + " "
 
 for(var i = position; i < str.length; i++){
    postfix += str[i]
 }
 newStr = prefix + postfix;
}
return newStr
}

console.log(insertString("My Random String", "JS", 10));