// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function countOccurrences(str, letter){
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i] === letter) {
            counter ++
        }
    }
    return counter
}
console.log(countOccurrences("nasanfdsdnasdnadnnndsndsn", "n"));