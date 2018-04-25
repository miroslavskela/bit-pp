// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function switchMinMax(array){
    var min = array[0];
    var max = 0;
    var index1 = 0; 
    var index2 = 0;
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            index1 = i
        }
        if(array[i] > max){
            max = array[i];
            index2 = i;
        }
    }
   array[index1] = max;
   array[index2] = min;

   return array
}
 var myArray = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
 console.log(switchMinMax(myArray));
