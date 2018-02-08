//Write a function that accepts a number as a parameter and checks if the number is prime or not. 
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function primeNumber(a) {
    var result;
    var divided=0;
    var i= 2;
    do {divided = a%i;
    }
    while (divided !== 0 && i<a){
        i++;
        
        if ( divided === 0) {
            return result = "It's not a prime number";
        
        } else {
            return result = "It's prime number";
        }
    }
    
} console.log(primeNumber(17));