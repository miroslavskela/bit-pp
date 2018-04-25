// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 function mostFrequent(array) {
    var item = ""; 
    var item1 ="";
    var mostFrequent = 1;
    var counter = 0;

     for(var i = 0; i < array.length; i++) {
        item = array[i]
        for (var j = i; j < array.length; j++){
            if (item === array[j]){
                counter ++
              
            }
            if(counter > mostFrequent){
                mostFrequent = counter
                item1 = item
            }
        }
        counter = 0;
     }
     return "The most frequent item is " +item1;
 }

  var myArray =  [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 4,4, "h", 4, "l", 4, "k", 4, "o"];
 console.log(mostFrequent(myArray));