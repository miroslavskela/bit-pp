"use strict";

(function () {

    function Genre(name){
        this.name = name;
        this.getData = function(){
            var firstLetter = this.name.charAt(0);
            var lastletter = this.name.charAt(name.length-1);
            var result = firstLetter + lastletter;
            return result.toUpperCase();
        }
    }

    function Movie(title, genre, length){
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function(){
            return this.title + ", " + this.length + " min, " + this.genre;
        }
    }
    

    function Program(date, numberOfMovies){
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = numberOfMovies;
        this.addMovie = 
        this.getData = function(){
            var programLength = 0;
             programLength+=movie.length ;
           return this.date + ", " + programLength + " min, " + " \n" + movie.getData();
        }
    }

    function Festival(name, numberOfAllMovies){
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = numberOfAllMovies;
    }


var action = new Genre("action");
console.log(action.getData());

var movie = new Movie("Svemirci su krivi za sve", action.getData(), 90);
console.log(movie.getData());


var program = new Program("11/2/2107", 1);
console.log(program.getData());



})();