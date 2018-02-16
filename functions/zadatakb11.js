/*Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/

function stringToNumber(arr) {

    var arrayOfNums = [];
    var newIndex = 0;
    for (i = 0; i < arr.length; i++) {

        var element = arr[i];
        var num = parseFloat(element, 10);

        if (!isNaN(num)) {
            arrayOfNums[newIndex] = num;
            newIndex++;
        }

    }

    return arrayOfNums;
}


var myArray = ["11", 2, undefined, "12", undefined, "1e+3"];
console.log(stringToNumber(myArray));