function firstOccurrence(str, a) {
 var pozicija = 0;
    for (var i = str.length; i > 0; i--) {
        if (a === str[i]) {
            pozicija = (i + 1);
            break;
        }else{
           pozicija = -1;
           
           
            
            
        }
        
        }
       return pozicija;   
    }
    console.log(firstOccurrence("aNeamanja", "a"));
    

