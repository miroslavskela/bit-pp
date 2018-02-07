function square(num) {

    var line = "";

    for (i = 1; i <= num; i++) {
        line += "*";
    }
    line += "\n";
    
    for (j = 1; j <= (num - 2); j++) {
        line += "*";
        for (i = 2; i <= (num - 1); i++) {
            line += " "
        }
        line += "*";
        line += "\n";
    } 

    for (i = 1; i <= num; i++) {
        line += "*";
    }
    return line;
}
console.log(square(100));

/*var length = 5;
var asterix = "*";
var string = "";
var space = " ";
for (var i = 0; i < length; i++) {
  for (var j = 0; j < length; j++) {
    if (i === 0 || i === length - 1) 
      string += asterix;
    else if (j === 0 || j === length - 1) 
      string += asterix;
    else 
      string += space;
    }
  if (i != length - 1) 
    string += "\n";
  }
console.log(string);*/
