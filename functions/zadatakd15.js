'use strict';

function wordSquare(arr){
    var word = 1;
    var result = "";
    for(var i = 0; i < arr.length; i++){
        if (arr[i].length > word) {
            word = arr[i].length
        }
    }
    for (var i = 0; i <= word +1; i++){
        for(var j = 0; j <= arr.length+1; j++){
            if ( i === 0 ||  i === word + 1) {
                result+="*"
            } else if(j === 0 || j === arr.length + 1){
                result+="*";
            } else {
                result+= " ";
            }
            
            
        }
         
        result+="\n"
        
    }return result;
}
console.log(wordSquare(["hello", "world", "in", "a", "frame"]));