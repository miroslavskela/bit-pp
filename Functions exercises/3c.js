// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


function falsyValues(array){
    var newArray = [];
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if(!!array[i] !== false){
            newArray[count] = array[i]
            count++
        }
    }
    return newArray
}
var myArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(falsyValues(myArray));