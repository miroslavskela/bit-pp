/* Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
 */
function falsy(myArr) {

    var newIndex = 0;
    var newArr = [];
    for (i = 0; i < myArr.length; i++) {
        if (!!myArr[i] !== false) {
            newArr[newIndex] = myArr[i];
                newIndex++;

        } 
    } return newArr;

}
var myArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(falsy(myArr));

