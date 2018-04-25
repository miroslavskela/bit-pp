// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function symetricArray(array){
    str1 = "";
    str2 = "";
    var msg = "";
    for (var i = 0; i < array.length; i++){
        str1 += array[i];
    }

    for (var i = array.length - 1; i >= 0; i--){
        str2 += array[i]
    }
    if(str1 === str2) {
        msg = "The array is symetric."
    }else{
        msg = "The array is not symetric."
    }
    return msg 
}

var myArray = [2,11, 4, -2, 7, -2, 4, 2];
console.log(symetricArray(myArray));