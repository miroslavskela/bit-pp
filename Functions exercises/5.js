// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****
function drawSquare(a) {
    var asterisk = ""
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if ((i !== 0 || i !== 4) && (j === 0 || j === 4)) {
                asterisk += "*";
            } else if ((i === 0 || i === 4) && (0 <= j <= 4)) {
                asterisk += "*"
            } else {
                asterisk += " ";
            }
        }
        asterisk += '\n'
    }
    console.log(asterisk);
}
drawSquare(5)