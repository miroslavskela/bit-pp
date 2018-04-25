// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
 

function joinElements(array){
    newArray = [];
    count = 0;
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] === "number" || typeof array[i] === "string"){
            if(isNaN(array[i]) === false){
                if(isFinite(array[i]) !== false){
            newArray[count] = array[i]
            count++;
        }
        }
        } 
    }
    return newArray
}
var myArray = [NaN, 0, 15, false, -22, '',Infinity, undefined, 47, null];

console.log(joinElements(myArray));