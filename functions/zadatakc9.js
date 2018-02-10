
function findFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
                
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
                
            }
        }
        m = 0;
    }
 
    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
 }
 
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 console.log(findFrequentItem(arr1));
 