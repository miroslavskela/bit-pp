// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


function concatenateString(str,n){
    if (n !== undefined){
        
        var result = "";
        for (var i = 0; i < n; i++){
            result += str
        } return result
    } else {
        return str
    }
}

console.log(concatenateString("Miroslav"))