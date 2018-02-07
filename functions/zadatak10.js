function myString(str) {
    var counter = 0;
    for (var i = 1; i < str.length; i++){
        if (str[i] === "a" || str[i] === "A"){
            counter++
        }
    }console.log(counter);
}
var myStr = "mAkadama"
myString(myStr);