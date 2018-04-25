// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
 function findWord(string, word){
     var counter = 0;
     var counter1 = 0;
     for (var i = 0; i < string.length; i++){
         if(string[i] === word[counter]){
             counter++;
             for(var j = i + 1; j < i + (word.length -1); j++){
                 if(string[j] === word[counter]){
                     counter++
                    }
                }
                counter1++;
         }
     }
     return word + " was found " + counter1 + " times."
 }

 console.log(findWord('aa The quick foxy brown foxy aa', 'aa'));
