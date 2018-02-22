"use strict";
(
    function () {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;

            this.getData = function () {
                return this.name + " " + this.surname;
            }
        }

        function Seat(number, category) {
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || "e";

            this.getData = function () {
                return this.number + ", " + this.category.toUpperCase();
            }
        }

        function Passenger(name, surname, number, category) {
            this.name = name;
            this.surname = surname;
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || ("e");

            this.getData = function (seat, person) {
                return seat.getData() + ", " + person.getData();
            }
        }

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth()+1;
            this.day = this.date.getDate();
            this.listOfPassengers = [];
            this.setDate = function () {
                return this.day + "." + this.month + "." + this.year + ".";
            }
            this.getData = function () {
                return this.date + " " + this.relation;
            }
            this.addPassenger = function (passenger) {
                this.listOfPassengers.push(passenger);
            }
        }

        function Airport() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];

            this.addFlight = function (flight) {
                this.listOfFlights.push(flight);
            }

            this.getData = function (passenger, flight) {
                var totalPassengers = flight1.listOfPassengers.length + flight2.listOfPassengers.length;

                return "Airport: " + this.name + ", total passengers: " + totalPassengers + "\n \t" + flight1.setDate() + " " + flight1.relation + "\n \t \t" +
                passenger1.number + ", " + passenger1.category.toUpperCase() + ", " + passenger1.name + " " + passenger1.surname + "\n \t \t" + passenger2.number + ", " + passenger2.category.toUpperCase() + ", " 
                + passenger2.name + " " + passenger2.surname + "\n \t" +  flight2.setDate() + " " + flight2.relation + "\n \t \t" + passenger3.number + ", " + passenger3.category.toUpperCase() + ", " +
                 passenger3.name + " " + passenger3.surname + "\n \t \t" + passenger4.number + ", " + passenger4.category.toUpperCase() + ", " + 
                 passenger4.name + " " + passenger4.surname;  
            }
        }

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }

        function createPassenger(name, surname, number, category) {
            return new Passenger(name, surname, number, category);
        }

        var passenger1 = createPassenger("Jessica", "Alba", 14, "b");
        var passenger2 = createPassenger("Julia", "Roberts", 11, "e");
        var passenger3 = createPassenger("Matt", "Damon");
        var passenger4 = createPassenger("Robbie", "Williams", 1);

        var airport1 = new Airport();

        var flight1 = createFlight("Belgrade - Paris", "2018-04-05");
        var flight2 = createFlight("Barcelona - Belgrade", "2018-04-12");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        airport1.addFlight(flight1);
        airport1.addFlight(flight2);

        console.log(airport1.getData());


    }
)();