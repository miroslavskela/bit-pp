(function(){
    "use strict"


    function Person (name, surname){
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getData = function(){
        var fullName =this.name + " " + this.surname;
        return fullName
    }

    function Seat (number, category){
        this.number = number || Math.round((90 * Math.random() - 10));
        this.category = category || "e"
    }
    Seat.prototype.getData = function() {
        var fullData = this.number + ", " + this.category.toUpperCase() 
        return fullData
    }

    function Passenger (person, seat){
        this.person = person;
        this.seat = seat;
    }

    Passenger.prototype.getData = function() {
        var passengerData = this.seat.getData() + ", " + this.person.getData()
        return passengerData
    }

    function Flight(relation, date){
        this.relation = relation; 
        this.date = new Date(date);
        this.listOfPassenger = [];
    }
    Flight.prototype.addPassenger = function(){
        for(var i = 0; i < arguments.length; i++){
        this.listOfPassenger.push(arguments[i])
    }
    }
    Flight.prototype.getFullDate = function() {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear()
        var fullDate = day + "." + month + "." + year + ".";
        return fullDate
    }
    Flight.prototype.getData = function(){
        var result = "";
        result = "\t" + this.getFullDate() + ", " + this.relation + "\n"
        for (var i = 0; i < this.listOfPassenger.length; i++){
            result += "\t\t" + this.listOfPassenger[i].getData() + "\n"
        }
        return result
    }
    function Airport(){
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function(){
        for(var i =0; i < arguments.length; i++){
        this.listOfFlights.push(arguments[i])
    }
    }
    Airport.prototype.numOfFlights = function(){
        var num = 0;
        for(var i = 0; i < this.listOfFlights.length; i++){
          num +=  this.listOfFlights[i].listOfPassenger.length;
        }
        return num
    }
    Airport.prototype.getData = function(){
        var result = "Airport: " + this.name + ", total passengers: " + this.numOfFlights() + "\n"
        for (var i = 0; i < this.listOfFlights.length; i++){
            result += this.listOfFlights[i].getData()
        }
        return result
    }


    function createFlight(relation, date){
        return new Flight(relation,date)
    }
     function createPerson(name, surname){
         return new Person (name,  surname)
     }

     function createSeat(number, category){
         return new Seat(number, category)
     }

     function createPassenger(person, seat){
         return new Passenger(person, seat)
     }

     var airport1 = new Airport();

     var flight1 = createFlight("Belgrade-New York", "2017-10-25");
     var flight2 = createFlight("Barcelona-Belgrade", "2017-11-11");

     var person1 = createPerson("John", "Snow");
     var person2 = createPerson("Cersei" , "Lannister");
     var person3 = createPerson("Daenerys", "Targaryen");
     var person4 = createPerson("Tyrion", "Lannister");

     var seat1 = createSeat(1, "b");
     var seat2 = createSeat(2, "b");
     var seat3 = createSeat(14);
     var seat4 = createSeat();

     var passenger1 = createPassenger(person1, seat1);
     var passenger2 = createPassenger(person2, seat2);
     var passenger3 = createPassenger(person3, seat3);
     var passenger4 = createPassenger(person4, seat4);

     flight1.addPassenger(passenger1, passenger2);
    

     flight2.addPassenger(passenger3, passenger4);
     

     airport1.addFlight(flight1, flight2);
     

     console.log(airport1.getData());

}())