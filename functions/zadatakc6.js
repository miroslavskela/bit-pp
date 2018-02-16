/* Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]  */

function numberOfElements(number, element) {
    var myArr = [];
    for (i = 0; i < number; i++) {
        if (element !== undefined) {
            myArr[i] = element;
        }else{
            myArr[i] = null;
        }
    }return myArr;

} console.log(numberOfElements(5));
