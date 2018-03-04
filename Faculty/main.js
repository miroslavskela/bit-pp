"use strict";

(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.id = Math.round(89999 * Math.random() + 10000);
    }

    Person.prototype.getDataPer = function () {                                                       //person method
        return this.name + " " + this.surname;
    }

    function Employee(name, surname, salary) {
        Person.call(this, name, surname);
        this.salary = parseInt(salary);
        this.employeeid = Math.round(8999 * Math.random() + 1000);
    }

    Employee.prototype = Object.create(Person.prototype);                                             //employee inherit person
    Employee.prototype.constructor = Employee;

    Employee.prototype.getDataEmp = function(){                                                     //employee method
        var fullNameEmployee = Object.getPrototypeOf(Employee.prototype).getDataPer.call(this);
        return fullNameEmployee + "; " + this.salary + "; " + this.employeeid;
    }

    function Professor(name, surname, salary, officeNumber) {
        Employee.call(this, name, surname, salary, employeeid)
    }

    Professor.prototype = Object.create(Employee.prototype);      //proffesor inherit employee
    Professor.prototype.constructor = Professor;

    Professor.prototype.getDataPro = function () {
        var fullNameProfessor = Object.getPrototypeOf(Professor.prototype).getDataEmp.call(this);  //Employee method
        return fullNameProfessor + "; " + this.officeNumber;
    }


    function Exam(subject, professor, date, grade) {
        Professor.call(this, name, surname);
        Student.call(this, name, surname)
        this.subject = subject
        this.date = new Date(date);
        this.grade = grade;
    }
    Exam.prototype.getSubject = function(){                      //exam  method
        if(this.subject.charAt(0) === "a" || "A" || "e" || "E"|| "i" || "I" || "o" || "O" || "u" || "U" ){
            return this.subject.charAt(1);
        }else{
            return this.subject.charAt(0);
        }  
    }
    Exam.prototype.getDate = function(){                                                        //exam method
        return getDate(this.date) + "." + getMonth(this.date) + "." + getFullYear(this.date);
    }
    
    Exam.prototype = Object.create(Professor.prototype);   //Exam inherit professor
    Exam.prototype.constructor = Exam;

    Exam.prototype.getDataEx = function(){
        var fullExam = Object.getPrototypeOf(Exam.prototype).getDataPro.call(this);   // professor method
        return this.getSubject() + " " + fullExam + ", " + this.getDate() + ", " + this.grade;
    }

    

    function Student(name, surname, indexnumber) {
        Person.call(this, name, surname);
        this.indexnumber = indexnumber;
        this.status = "regular"
        this.passedExamsList = [];
    }

    Student.prototype = Object.create(Person.prototype); // student inherit person
    Student.prototype.constructor = Student;

    Student.prototype.addExam = function (exam) {       //student Method 
        this.passedExamsList.push(exam);
    }
    Student.prototype.getDataStu = function (){
        var fullNameStu =  Object.getPrototypeOf(Student.prototype).getDataPer.call(this); //person met
        return this.indexnumber + "; " + fullNameStu + "; " + this.avarageGrade;
    }




function Faculty(name) {
    this.name = name;
    this.studentList = [];
    this.numberOf10Grade = 0;

}
Faculty.prototype.addStudent = function(student){     //faculty method
    studentList.push(student);
}
Faculty.prototype.addTen = function(grade){           //faculty method
    if (grade === 10) {
        numberOf10Grade.push(grade);
    }
}

var student1 = new Student ("Miroslav", "Skeledzija", 1233);
console.log(student1.getDataStu());

})();
