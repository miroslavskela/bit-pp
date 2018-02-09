/*
Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"*/

function insertStringinString(str1, str2, position) {
    var prefix = "";
    var postfix = "";

    for (i = 0; i < position; i++) {
        prefix += str1[i];
    }
    prefix += str2;

    for (i = position; i < str1.length; i++) {
        postfix += str1[i];
    }
    return prefix + postfix;
}
console.log(insertStringinString("Milorad fdsfds", "js", 2));





/*function insertStringinString(str1, str2, position) {
    var prefix = "";
    var postfix = "";
    for (i = 0; i < str1.length; i++) {
        if (str1[i] < position - 1) {
          
            prefix += str1[i];
        } else if (str1[i] === position - 1) {
            prefix += str2
        }
        else {
            postfix += str1[i];
        }
        return prefix + postfix;
    }
}
console.log(insertStringinString("Milorad fdsfds", "js", 2));
pokusali smo da koristimo jednu for petlju ali nam nije uspelo
*/