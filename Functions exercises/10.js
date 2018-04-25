// Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.
function numOfLetter(str){
    var counter = 0;
    for (var i = 0; i< str.length; i++){
        if (str[i] === "a" || str[i] === "A"){
            counter ++
        }
    }
    return counter
}
 var string1 = "Akvanautika akva nauka je akvanautika";
 console.log(numOfLetter(string1));