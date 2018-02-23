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
// function person


        function Seat(number, category) {
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || "e";

            this.getData = function () {
                return this.number + ", " + this.category.toUpperCase();
            }
        }
// function seat


        function Passenger(name, surname, number, category) {
            this.name = name;
            this.surname = surname;
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || ("e");

            this.getData = function (seat, person) {
                return this.number + ", " + this.category.toUpperCase() + ", " + this.name + " " + this.surname;
            }
        }
// function passenger


        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth() + 1;
            this.day = this.date.getDate();
            this.listOfPassengers = [];
            this.setDate = function () {
                return this.day + "." + this.month + "." + this.year + ".";
            }
            this.getData = function () {
                return this.setDate() + " " + this.relation;
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

            this.getData = function () {
                var totalPassengers = 0;
                var output1 = "";
                var output2 = "";
                for (var i = 0; i < this.listOfFlights.length; i++) {
                    var flight = this.listOfFlights[i];
                    output1 += "\t" + this.listOfFlights[i].getData() + "\n";
                    totalPassengers += flight.listOfPassengers.length
                    for (var j = 0; j < this.listOfFlights[i].listOfPassengers.length; j++) {
                        var passenger = this.listOfFlights[i].listOfPassengers[j]
                        output1 += "\t\t" + passenger.getData() + "\n";
                       
                    }
                }
                var output = "Airport: " + this.name + ", total passengers: " + totalPassengers + "\n";


                return output + output1;
            }
        }
        // function flight

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }
// create flight

        function createPassenger(name, surname, number, category) {
            return new Passenger(name, surname, number, category);
        }
// create passenger

        var passenger1 = createPassenger("Jessica", "Alba", 14, "b");
        var passenger2 = createPassenger("Julia", "Roberts", 11, "e");
        var passenger3 = createPassenger("Matt", "Damon");
        var passenger4 = createPassenger("Robbie", "Williams", 1);
        var passenger5 = createPassenger("Mornar", "Popaj" )
// create passenger

        var airport1 = new Airport();
// instanceof airport

        var flight1 = createFlight("Belgrade - Paris", "2018-04-05");
        var flight2 = createFlight("Barcelona - Belgrade", "2018-04-12");
// create flight

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);
        flight2.addPassenger(passenger5);

        airport1.addFlight(flight1);
        airport1.addFlight(flight2);

        console.log(airport1.getData());


    }
)();