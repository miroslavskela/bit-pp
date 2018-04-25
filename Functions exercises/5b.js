// Write a function to find the position of the first occurrence of a character in a string. 
// The result should be in human numeration form. If there are no occurrences of the character, 
// the function should return -1.

function firstOccurence(str, letter){
    var position = -1;
    for (var i = 0; i < str.length; i++){
        if (str[i] === letter){
            position = i;
            break;
        }
    }
    return position;
    
}

console.log(firstOccurence("abdfvt=yu", "f"))