// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
 function concatenateArrays(array1, array2){
     var newArray = [];
     var count = 0
     for (var i = 0; i < array1.length; i++){
         newArray[count] = array1[i]
         count++
     }
     for (var j = 0; j < array2.length; j++){
         newArray[count] = array2[j]
         count++
     }
     return newArray
 }
 var myArray1 = [4, 5, 6, 2];
 var myArray2 = [3, 8, 11, 9];
 console.log(concatenateArrays(myArray1, myArray2));