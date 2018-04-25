// Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc.
 function concatString(str, a){
     var newStr = "";
     for (var i = 0; i < a; i++){
         newStr += str;
     } 
     return newStr
 }
 string1 = "abc";
 console.log(concatString(string1, 4));