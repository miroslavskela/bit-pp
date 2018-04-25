// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
  function secondLargest(array){
     var max = 0;
     var secondMax = 0;
     for (var i = 0; i < array.length; i++){
       if (array[i] > max){
        max = array[i]
       }
     }
     
     for(var i = 0; i < array.length; i++){
       if(secondMax <= array[i] && array[i] !== max){
         secondMax = array[i]
       }
      }
      return "Second largest number of array is " + secondMax
}
  var myArray = [2, 4, 5, 2, -1, 6, 7];

  console.log(secondLargest(myArray));



