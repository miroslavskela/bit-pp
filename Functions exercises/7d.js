// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwinsArrays(array1, array2){
    var newArray = []; 
    var count = 0
    for (var i = 0, j = 0; i < array1.length, j < array2.length; i++, j++){
        newArray[count] = array1[i]
        count++;
        newArray[count] = array2[i]
        count++;
    }
    return newArray
}
var myArray1 = [4, 5, 6, 2];
var myArray2 = [3, 8, 11, 9];
console.log(intertwinsArrays(myArray1, myArray2));
