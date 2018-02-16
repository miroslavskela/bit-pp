

function countLetter(wor, letter) {
    var counter = 0;
    for (var i = 0; i < wor.length; i++) {
        if (wor[i] === letter) {
            counter++;
        }
    }
    return counter;
}


var brojac = countLetter('ko to tamo peva', 'o');

console.log(brojac);