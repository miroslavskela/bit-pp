// Write a function to get the first n characters and add “...” at the end of newly created string.
 function addChar(str, number,) {
     var result = " ";
     
     for(var i = 0; i < number; i++){
            result += str[i]; 
            
        

     }
     result = result + "..."
     
     return result;
 }
 console.log(addChar("Miroslav", 3));
 