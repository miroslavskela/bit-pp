//Write a function that reverses a number. The result must be a number.

//12345 -> 54321 // Output must be a number


function reversNumber(number){
    var strNumber = "";
    strNumber = strNumber + number;
    
    var strNumberReverse = "";
  
  for (var i = strNumber.length-1; i >= 0; i--){
      strNumberReverse+=strNumber[i];
      }
      
  
    return parseInt(strNumberReverse, 10);
    
}

console.log(reversNumber(5757575575));
