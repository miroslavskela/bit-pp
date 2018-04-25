// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false
 function checkInput(input){
     if(typeof input === "string"){
         return true;
     } else {
         return false;
     }
 }
 console.log(checkInput(true))