// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function convertToNum(array){
    var newArray = []
    newCounter = 0;
    for (var i = 0; i < array.length; i++){
       
        if (!!(parseFloat(array[i])) && array[i] !== Infinity ){
           
            newArray[newCounter] =(parseFloat(array[i])) 
            newCounter++
        }
    }
    return newArray
}
var myArray = ["1", "21", undefined, "42", "1e+3", Infinity]
console.log(convertToNum(myArray));