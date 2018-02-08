function firstOccurrence(str, a) {
    var pozicija = 0;
    for (var i = 0; i < str.length; i++) {
        if (a === str[i]) {
            pozicija = (i + 1);
            break;
        } else {
            pozicija = -1;




        }

    }
 return pozicija;
}
console.log(firstOccurrence("aNeamanja", "y"));