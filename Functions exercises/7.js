// Write a function that calculates a number of digits of a given number. 

function numberOfDigits(a){
    var stringNumber = a +""
    var digitNumber = stringNumber.length
    return digitNumber
}

console.log(numberOfDigits(123456789123456789))