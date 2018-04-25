// Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
// * * * * *
// * * *
// * * * * * * *
 function drawHorizontalChart(a,b,c){
     var asterisk = "";
    
     for (var i = 0; i < a; i++){
    
       asterisk += "*";
    }
    asterisk +="\n"
     
     for (var j = 0; j < b; j++){
       
            asterisk += "*";
         }
         asterisk += "\n"
     
      for (var k = 0; k < c; k++){
      
            asterisk += "*";
         
      }
     return asterisk
 }
 console.log( drawHorizontalChart(5,2,7));