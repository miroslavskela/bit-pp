// Write a function that calculates the sum of odd elements of a given array. 


function sumOdd(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
sum += array[i]
}
    }
    return sum
}
var array1 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1];
console.log(sumOdd(array1));