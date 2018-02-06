var students = [80, 77, 88, 95, 68];
var sum = 0;
var avg = 0;

for (i = 0; i < students.length; i++) {
    sum += students[i];
    avg = sum / students.length;
}
console.log(avg);
if (avg < 60) {
    console.log("The grade is F");
} else if (avg >= 60 && avg < 70) {
    console.log("The grade is D");
} else if (avg >= 70 && avg < 80) {
    console.log("The grade is C");
} else if (avg >= 80 && avg < 90) {
    console.log("The grade is B");
} else if (avg >= 90 && avg <= 100) {
    console.log("The grade is A");
}

