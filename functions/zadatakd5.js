// Write a program that prints a multiplication table for numbers up to 12.

function miltip(num){
    var result="";
    for( var i=1; i<=num; i++){
for ( var j=1; j<=num; j++){
result = result + " " +  i*j;
}
result = result + "\n";
    }return result;
}console.log(miltip(5));