/* Write a function that takes a list of strings 
and prints them, one per line, in a rectangular frame.: */


"use strict";
var myArr = ["Hello", "world", "in", "a", "frame"];

function wordInaFrame(arr) {
    var result = "";
    var longestWord = 1;
    for (var i = 0; i < arr.length; i++) {
        if (longestWord < arr[i].length) {
            longestWord = arr[i].length
        }
    };
    for (var i = 0; i < longestWord + 2; i++) {
        for(var j = 0; j < arr.length + 2; j++){
            result = result + "*" ;
        }    
            result = result + "*" + "\n";

        }
        for(var i = 1, j = 1; i < longestWord + 1, j < arr.length + 1; i++, j++){
            result +="";
        }
        
    
      return result;
        

    }
   









console.log(wordInaFrame(myArr));