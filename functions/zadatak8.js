

function numAppear(arr, a) {
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (a === arr[i]) {
            counter++
            
        }
    }
    console.log(counter);
}
var myArray = [1, 2, 5, 7, 5, 5, 87, 5, 52, 8, 5, 6, 7,5,5, 54];
numAppear(myArray,5);