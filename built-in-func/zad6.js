/*Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."*/
    
    "use strict";

    function convert(str) {
        var initial = "";
        var space = str.indexOf(" ");
        initial =str.substring((space + 2), -1);
        return initial + ".";
    }
    console.log(convert("Slobodan Milosevic"));
    
