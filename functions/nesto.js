var resu = "";
var res = '';

function square(d, f) {
    for (var i = 0; i < d; i++) {
        resu += "*";
    }
    console.log(resu);

    for (var j = 0; j < f; j++) {
        res = '*\t' + "*";/*moze i da bude nov red: */
        console.log(res);
    }

    console.log(resu);
}

square(5, 3);