// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]


function deleteElement(array, e) {
    var newArray = [];
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] !== e){
        newArray[count] = array [i];
        count++
        }
    }
    return newArray
}
 var myArray = [4, 6, 2, 8, 2, 2]
 console.log(deleteElement(myArray, 2));