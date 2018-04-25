// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
  function checkString(input){
      if(typeof input === "string" && input.length !== 0){
          return true
      } else if (typeof input !== "string"){
          return "Input is not valid (string)."
      } else {
          return "Input is an empty string"
      }
  }
  console.log(checkString(11));