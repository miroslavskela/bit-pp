// // Write a function to calculate how many years there are left until retirement based on the year of birth. 
// // Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, 
// // a proper message should be displayed.

// function yearsToRetirement(yearOfBirth, gender) {
//     var msg = "";
//     var date = new Date();
//     var thisYear = date.getFullYear();
//     var years = thisYear - yearOfBirth;
//     if (gender === "female") {
//         var yearsToRetirement = 60 - years;
//         msg = "You have " + yearsToRetirement + " years to retirement."
//         if (yearsToRetirement < 1) {
//             msg = "You are alredy in retirement."
//         }
//     } else if (gender === "male") {
//         var yearsToRetirement = 65 - years;
//         msg = "You have " + yearsToRetirement + " years to retirement."
//         if (yearsToRetirement < 1) {
//             msg = "You are alredy in retirement."
//         }
//     }
//     return msg
// }
// console.log(yearsToRetirement(1970, "male"))

function test() {
    var b = function foo() {
        return 2;
    }
    console.log(a);
    console.log(b());

    var a = 1;
}

test();


 

    
 

 
 
