function myString(str,letter) {
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === letter){
            counter++
        }
    }console.log(counter);
}

myString("Svaka slonica ima surlu.","s");