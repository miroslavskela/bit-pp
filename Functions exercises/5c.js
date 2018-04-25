// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  
 function getElements(array, n){
     var newArray = [];
     var count = 0;
     var count1 = n-1;
     if(n === undefined) {
         newArray[count] = array[array.length-1]
     } else {
         for (var i = array.length - 1; i >= array.length - n; i--){
             newArray[count1] = array[i]
             count1--;
         }
     }
     return newArray
 }
 var myArray = [7, 9, 0, -2];
 console.log(getElements(myArray, 4));