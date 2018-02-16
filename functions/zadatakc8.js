/* Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
 */
function wordWhithinString (str, word){
    var msg = "";
    var x = 0;
    var y = 0;
    for ( var i = 0; i < str.length; i++){
        if (str[i]===word[0]){
            for (j = i; j < word.length + i; j ++){
                str[j] === word[j-i]
                y++
            }
            if (y = word.length){
                x++
            }
        } y = 0;


    } msg = word + " je pronadjena " + x + " puta";
    return msg;
} console.log(wordWhithinString(" fox The quick brown fox", "fox"));
