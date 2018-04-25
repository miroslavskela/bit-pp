// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function hideEmail(email, num){
    var prefix = "";
    var sufix = "";
    var dots = "..."
    for(var i = 0; i < num; i++){
        prefix += email[i];
    }
    for (var i = 0; i < email.length; i++){
        if(email[i] === "@"){
            for (var j = i; j < email.length; j++){
                sufix += email[j]
            }
        }
    }
    return prefix + dots + sufix
}
console.log(hideEmail( "myemailaddress@bgit.rs",7));