var a = -73;
if(typeof a === "number"){
    if ((a > 9 && a < 100) || (a<-9 && a>-100)){
        var sum10 = (a % 10)*10;
        var sum1 = (a - (a % 10))/10;
        var switched = "" + (sum10+sum1);
        console.log(switched);     
    }else{
        console.log("Please enter a number between 10 and 99")
    }
}else{
    console.log("Enter number")
}