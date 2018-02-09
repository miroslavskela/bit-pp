/*Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.*/

function yearsUntilRetirement(yearOfBirth, gender) {

    var yourAge = 2018 - yearOfBirth;
    sufferTime = 0;

    if (gender === "f" || gender === "F") {
        if (yourAge < 60 && yourAge > 0) {
            sufferTime = 60 - yourAge;
        }
        else {
            return "You are already retired"
        }

    }

    if (gender === "m" || gender === "M") {
        if (yourAge < 65 || yourAge > 0) {
            sufferTime = 65 - yourAge;

        }
        else {
            return "You are already retired"
        }
    }
    return sufferTime;
}
    console.log(yearsUntilRetirement(1998,"m"));