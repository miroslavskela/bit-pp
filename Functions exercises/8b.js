// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number 
// greater than 1 that has no positive divisors other than 1 and itself.

function primeNumber(num){
    var msg = "";
    if(num === 0){
        msg = "Wrong input";
    }
    if (1 <= num <= 3){
       msg = "Number " + num +  " is prime number";
    }
    for (var i = 2; i < num; i++){
        if (num % i === 0){
            msg =  "Number " + num +  " is not prime number";
            break;
        } else {
            msg =  "Number " + num +  " is prime number";
        }
    }
    return msg
}
console.log(primeNumber(37));