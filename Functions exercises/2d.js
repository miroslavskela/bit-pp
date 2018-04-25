// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]


function multiplyPositive(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if(array[i] > 0){
            newArray[i] = array[i]*2
        } else {
            newArray[i] = array[i]
        }
    }
    return newArray
}
var myArray = [-3, 11, 5, 3.4, -8];
console.log(multiplyPositive(myArray));