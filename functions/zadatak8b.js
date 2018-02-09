/*Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

function primeNumber(number) {

    var msg = " ";

    if (number === 1 || number === 2) {
        msg = number + ' is a prime number';
        return msg;
    }

    for (var i = 2; i < number; i++) {

        if (number % i === 0) {

            msg = number + ' is not a prime number';

            break;
        }

        else {

            msg = number + ' is a prime number';
        }
    }

    return msg;
}

console.log(primeNumber(3));