

function chart(a, b, c) {
    var char = "";

    for (i = 1; i <= a; i++) {
        char += "*";
    }
    char += "\n";

    for (i = 1; i <= b; i++) {
        char += "*";

    } char += "\n";
    for (i = 1; i <= c; i++) {
        char += "*";

    }
    return char;

} console.log(chart(2, 5, 3));