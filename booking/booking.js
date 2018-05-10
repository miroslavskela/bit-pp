(function(){  
    'use strict'
    var continents = {
    ASIA:"AS",
    EUROPE:"EU",
    AFRICA:"AF",
    NORTHAMERICA:"NA",
    SAUTHAMERICA:"SA",
    AUSTRALIA:"AU"
    }
     Object.seal(continents)

function Country(name, odds, continent){
    this.name = name
    this.odds = odds 
    this.continent = continent
}
Country.prototype.getNameAchronym = function(){
    var name = this.name
    return name.substr(0,2)
}
Country.prototype.getOdds = function(){
    return this.odds
}

function Person(name, surname, dob){
    this.name = name
    this.surname = surname
    this.dob = new Date(dob)
}
Person.prototype.getDob = function(){
    var day = this.dob.getDay()
    var month = this.dob.getMonth() + 1
    var year = this.dob.getFullYear()
    var dob = day + "." + month + "." + year + "."
    return dob
}

Person.prototype.getYears = function(){
    var todayDate = new Date()
    var thisYear = todayDate.getFullYear()
    var year = this.dob.getFullYear()
    return thisYear - year + " years old"
}

Person.prototype.fullName = function(){
var name = this.name
var surname = this.surname
return name + " " + surname + ", " + this.getDob()
}

function Player(person, betAmount, country){
    this.person = person
    this.betAmount = betAmount
    this.country = country
}
Player.prototype.getFullData = function(){
return this.country.getNameAchronym() + ", " + (this.country.getOdds() * this.betAmount) + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.getYears()
}

function Address(country, city, postalCode, street, number){
    this.country = country
    this.city = city
    this.postalCode = postalCode
    this.street = street, 
    this.number = number
}
Address.prototype.getFullAddress = function(){
    return this.street + " " + this,number + ", " + this.postalCode + " " + this.city + ", " + this.country.getNameAchronym()
}

function BetPlace(address){
this.address = address
this.listOfPlayers = []
}
BetPlace.prototype.addPlayer = function(){
    for(var i = 0; i < arguments.length; i++){
    this.listOfPlayers.push(arguments[i])
}
    return this.listOfPlayers
}
BetPlace.prototype.sumOfAllBets = function(){
    var sum = 0;
    for(var i = 0; i < this.listOfPlayers.length; i++){
        sum+=this.listOfPlayers[i].betAmount
    }
    return sum
}

BetPlace.prototype.getFullData = function(){
    var result = ""
    result = "\n\t" + this.getData()
    for(var i = 0; i < this.listOfPlayers.length; i++){
        result += "\n\t\t" + this.listOfPlayers[i].getFullData()
    }
    return result
}

BetPlace.prototype.getData = function(){
    var street = this.address.street;
    var postalCode = this.address.postalCode + " " + this.address.city
    return street + ", " + postalCode + ", sum of all bets: " + this.sumOfAllBets()
}

function BettingHouse(competition){
    this.competition = competition
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;
}
BettingHouse.prototype.getData = function(){
    var name = this.competition
    var numOfPlaces = this.listOfBettingPlaces.length
    var numOfBets = 0;
    for (var i = 0; i < this.listOfBettingPlaces.length; i++){
        numOfBets += this.listOfBettingPlaces[i].listOfPlayers.length
    }
    return name + ", " + numOfPlaces + " betting places, " + numOfBets + " bets"
}
BettingHouse.prototype.sumOfSerbiaBets = function(){
    var sum = 0;
    for(var i = 0; i < this.listOfBettingPlaces.length; i++){
        for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++){
            if(this.listOfBettingPlaces[i].listOfPlayers[j].country.name === "Srbija")
            sum+=1
        }
    }
    return sum
}
BettingHouse.prototype.addBettingPlace = function(){
    for(var i = 0; i < arguments.length; i++){
       this.listOfBettingPlaces.push(arguments[i])
    }
    //this.listOfBettingPlaces.push(betPlace)
    return this.listOfBettingPlaces
}
BettingHouse.prototype.getFullData = function(){
    var result = ""
    result = this.getData()
    for (var i = 0; i < this.listOfBettingPlaces.length; i++){
        result += this.listOfBettingPlaces[i].getFullData()
    }
    return result + "\n" + "There are " +  this.sumOfSerbiaBets() + " bets on Serbia."
}



function createPlayer(name, odds, continent, personName, personSurname, dob, betAmount){
    var country = new Country(name, odds, continent)
    var person = new Person(personName, personSurname, dob)

    return new Player(person, betAmount, country)
}

function createBettingPlace(country, city, postalCode, street, number){
    var address = new Address(country, city, postalCode, street, number)
    return new BetPlace(address)
}

function createBettingHouse(competition){
    return new BettingHouse(competition)
}

var bettingHouse1 = createBettingHouse("Footbal World Cup Winner")

var player1 = createPlayer("Srbija", 2, continents.EUROPE,"Milan", 'Milosevic', "1990-10-25", 1050, )
var player2 = createPlayer("Srbija", 2, continents.EUROPE,"Milan", 'Milosevic', "1990-10-25", 1050, )
var player3 = createPlayer("Grcka", 2, continents.EUROPE,"Milan", 'Milosevic', "1990-10-25", 1050, )
var player4 = createPlayer("Srbija", 2, continents.EUROPE,"Milan", 'Milosevic', "1990-10-25", 1050, )

var bettingPlace1 = createBettingPlace("Srbija", "Beograd", 11000, "Nemanjina", 11)
var bettingPlace2 = createBettingPlace("Srbija", "Beograd", 11000, "Nemanjina", 11)

bettingPlace1.addPlayer(player1, player2)
// bettingPlace1.addPlayer(player2)
bettingPlace2.addPlayer( player3, player4)
// bettingPlace2.addPlayer(player4)

bettingHouse1.addBettingPlace(bettingPlace1, bettingPlace2)
// bettingHouse1.addBettingPlace(bettingPlace2)
console.log(bettingHouse1.getFullData());
})()



 