// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3


function findMin(array){
    var minNum = 1;
    var index = 0;
for (var i = 0; i < array.length; i++){
    
        if (array[i] < minNum){
        minNum = array[i]
        index = i
        }
    }


return minNum + ", " + index
}
var myArray = [4, -9, 2, 2, -57, -1, 6, -7];

console.log(findMin(myArray));