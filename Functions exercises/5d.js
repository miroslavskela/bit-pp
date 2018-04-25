// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16


function sumOfPositive(array){
    var sum = 0; 
    for (var i = 0; i < array.length; i++){
        if(array[i] > 0){
            sum += array[i]
        }
    }
    return sum
}

var myArray = [3, 11, -5, -3, 2, 16];

console.log(sumOfPositive(myArray));