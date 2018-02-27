/*Employees and Managers

1.  Create constructor functions with properties representing the following:
Employee: name, surname, specialization, salary
Manager: name, surname, department, salary

2.  All employees should inherit method:
getSpecialization which prints out the name of the specialization

3.  All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

4.  All employees and managers should inherit methods:
getData which prints out the name and surname 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% */

"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getData = function () {
    return this.name + this.surname;
};

Person.prototype.getSalary = function () {
    return this.salary;
};

Person.prototype.increaseSalary = function () {
    return this.salary * 1.1;
};


function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname)
    this.specialization = specialization;
    this.salary = salary;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Manager(name,surname, department, salary) {
    Person.call(this, name, surname)
    this.department = department;
    this.salary = salary;
};

Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;

Employee.prototype.getSpecialization = function () {
    return this.specialization;
};
Manager.prototype.getDepartment = function () {
    return this.department;
};
Manager.prototype.changeDepartment = function (value) {
    return this.department = value;
};



var person1 = new Person("Milorad", "Mandrapa")

var sef = new Manager("Milorad", "Mandrapa", "Q&A", 1200);
var radnik = new Employee("Milorad", "Mandrapa", "nail and hammer", 600);


console.log(radnik);
// console.log(radnik);