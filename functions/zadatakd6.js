// Write a function to input temperature in Centigrade and convert to Fahrenheit.
'use strict';
function toFahrenheit(temp) {
    var a = 0;
    a ="Temperature in Fahrenheit is " +  ((temp * 9)/5 + 32);
    return a;
    
}
console.log(toFahrenheit(27));