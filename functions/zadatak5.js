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
console.log(square(5));