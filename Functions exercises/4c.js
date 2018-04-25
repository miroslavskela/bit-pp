// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number


function reverseNumber(number){
    var strNum = number +"";
    var newStr = ""
    for (var i = strNum.length - 1; i >=  0; i--){
        newStr += strNum[i]
    }
    return typeof (parseInt(newStr))
    
}

console.log(reverseNumber(12345));