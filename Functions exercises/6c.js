// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function createArray (number, element){
    newArray = [];
    for (var i = 0; i < number; i++){
        newArray[i] = element
    }
    return newArray
}
console.log(createArray(5,"Ja"));