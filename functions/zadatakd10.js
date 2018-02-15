//Write a function to find the element that occurs most frequently.
"use strict";

function mostFrequentli(arr){
    var mostFreq = 1;
    var counter = 0;
    var result = "";
    for(var i=0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                   counter++;                 
            } 
            if (mostFreq < counter) {
                mostFreq = counter;
                result = arr[j]+ ", " + counter + " puta";
            }
                
            }
            counter = 0;
        }return result;
    }
    console.log(mostFrequentli([1,1,2,3,4,1,5,5,1,4,3,9,1]));
