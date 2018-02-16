/* Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
 */

 function lastElement(arr, number){
    var newArr = [];
    var newIndex = number-1 ;
    var newIndex1 = 0;
     if (number !== undefined) {
     for (i = arr.length-1; i >= (arr.length)-number; i--){
             
             newArr[newIndex]=arr[i] 
             newIndex --;
             
            }
        } else if (number === undefined) {
            for (i = arr.length-1; i >= arr.length-1; i--){
                newArr[newIndex1]=arr[i];
               
            }
            
        } {

        }
            return newArr;
 } 
 var myArr = [7, 9, 0, -2];
 console.log(lastElement(myArr));
 