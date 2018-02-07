function blankString (b) {
    if (typeof b === "string" &&  !!b===false){
        return true;
    } else {
        return false;
    }
} console.log(blankString("fgfgfg"))