// Write a program that inserts a given element e on the given position p in the array a. If the value of the 
// position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


function insertElement(array, e, p) {
    var newArray = [];
    var newArray1 =[];
    var count = 0;
    var count1 = p + 1;
    var msg = "";
    if(p <= array.length){
    for (var i = 0; i < p; i++){
        newArray[count] = array[i]
        count++;
    }
    newArray[p] = e;
    for (var i = p; i < array.length; i++){ //continues from index equal p, but that element from array moves one position plus (count1 = p+1)
        newArray[count1] = array[i]
        count1++;
    }
return newArray
} else{
    return "Error"
}
}
var myArray = [2, -2, 33, 12, 5, 8];

console.log(insertElement(myArray, 78, 1));