// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


 function convertString(str) {
     var arr1 = [];
     for (var i = 0; i < str.length;i++){
         if(str[i] === " "){
             arr1[i] = null
         }else{
         arr1[i] = str[i]
         }         
     }
     return arr1
 }
 console.log(convertString("Moj neki random string"));