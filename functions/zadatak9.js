function sumOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            
        }
    } 
    
    console.log(sum);
} 

var myArr = [1, 2, 3, 4, 5];
sumOdd(myArr);
